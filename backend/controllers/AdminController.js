const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const fs = require("fs");
const csv = require("csv-parser");
const { dbAdminUserPool } = require("../db/db");
const login = (req, res) => {
    const { user, password } = req.body;
    if (!user || !password) {
        res.status(200).json({
            errorMessage: "Missing Params",
        });
    }
    bcrypt.compare(password, process.env.ADMIN_PASSWD)
        .then((result) => {
            if (result && process.env.ADMIN_USER === user) {
                jwt.sign(
                    { is_admin: true },
                    process.env.JWT_SECRET,
                    (err, token) => {
                        if (err) {
                            console.log(err);
                        } else {
                            return res.status(200).json({
                                token,
                            });
                        }
                    }
                );
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

const fileUpload = async (req, res) => {
    if(!req.file) {
        return res.status(400).json({
            errorMessage: "Missing Required Params",
        });
    }
    
    const csvFilePath = "./uploads/" + req.file.filename;    
    const client = await dbAdminUserPool.connect();
    try{

        await client.query("BEGIN"); // Begin transaction

        fs.createReadStream(csvFilePath)
            .pipe(csv())
            .on("data", async (row) => {
                const { users_name, registration_number } = row;
                const query = {
                    text: "INSERT INTO username(name, reg_no) VALUES($1, $2) ON CONFLICT (reg_no) DO NOTHING",
                    values: [users_name, registration_number],
                };
                try{
                    const result = await client.query(query);
                } catch(err) {
                    console.error(`Error inserting data: ${err}`);

                }
            })
        
        await client.query('COMMIT'); //Commit the transaction
        return res.status(200).json({
            upload_status: "file uploaded sucessfully",
        });

    } catch (err) {
        await client.query('ROLLBACK'); // Rollback the transaction
        console.error('Error:', err);
        return res.status(500).json({
            message: 'Query error',
            error: err,
        });
    } finally {
        // Release the client back to the pool
        client.release();
    }
};

const putScore = (req, res) => {
    
};

module.exports = {
    login,
    fileUpload,
    putScore,
};

const format = require("pg-format");
const { dbAppUserPool } = require("../db/db");
const { dbAdminUserPool } = require("../db/db");

const getProfile = async (req, res) => {

    const {reg_no} = req.body;
    if(!reg_no){
        return res.status(400).json({
            errorMessage: "Missing Required Params",
        });
    }
    const client = await dbAdminUserPool.connect();
    console.log(reg_no)
    try {
        const query = format("SELECT name FROM username WHERE reg_no = %L ",reg_no);
        const result = await client.query(query);
        return res.status(200).json({
            result: result.rows[0],
        });
    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({
            message: "Query error",
            error: err,
        });
    } finally {
        client.release();
    }
}

const updateProfile = async (req, res) => {
    // 
}

const getLeaderboards = async (req, res) => {

    return res.status(200).json({
        
    });
};

module.exports ={
    getProfile,
    updateProfile,
    getLeaderboards
} 
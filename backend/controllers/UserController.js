const format = require("pg-format");
const { dbAppUserPool } = require("../db/db");

const getProfile = async (req, res) => {

    const {reg_no} = req.body;
    if(!reg_no){
        return res.status(400).json({
            errorMessage: "Missing Required Params",
        });
    }
    const client = await dbAppUserPool.connect();
    try {
        const query = format(
            "SELECT name FROM username WHERE reg_no = %L",
            reg_no
        );

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
    const client = await dbAppUserPool.connect();
    try {
        const query = format(
            "SELECT u.name, u.reg_no, s.points"
            +" FROM username AS u"
            +" INNER JOIN scoreboard1 AS s ON u.reg_no = s.reg_no"
            +" ORDER BY s.points DESC"
        );
        const result = await client.query(query);
        return res.status(200).json({
            result: result.rows,
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
};

module.exports ={
    getProfile,
    updateProfile,
    getLeaderboards
} 
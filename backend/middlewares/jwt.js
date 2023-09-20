function verifyToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        const bearerToken = bearerHeader.split(" ")[1];
        jwt.verify(bearerToken, process.env.SECRET_KEY, (err, authData) => {
            if (err) {
                res.sendStatus(403).json({
                    errorMessage: "Authorization failed",
                });
            } else {
                next();
            }
        });
    } else {
        res.sendStatus(403).json({
            errorMessage: "Authorization token missing",
        });
    }
}

module.exports = verifyToken
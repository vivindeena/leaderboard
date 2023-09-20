module.export = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "tmp");
    },
    filename: (req, file, cb) => {
        const d = new Date(Date.now()).toISOString();
        cb(null, `${d.slice(0, 10)} ${d.slice(11, 19)} ${file.originalname}`);
    },
});

const logFilter = function(req, file, cb) {
    if (!file.originalname.match(/\.(log)$/)) {
        req.fileValidationError = 'Грузить файлы только формата .log';
        return cb(new Error('Грузить файлы только формата .log'), false);
    }else{
        req.fileResult = "Файл загружен";
        cb(null, true);
    }
};

exports.logFilter = logFilter;
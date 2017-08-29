exports.port = process.env.PORT || 5001
exports.origin = process.env.ORIGIN || `http://localhost:${exports.port}`
exports.dbUrl = 'mongodb://localhost:27017/project1'

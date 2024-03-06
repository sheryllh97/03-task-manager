const mongoose = require('mongoose')

const connectDB = (url) => {
return mongoose.connect(url, {
    useNewUrlParsers: true,
    useCreateIndex: true,
    useFindAndModofy: false,
    useUnifiedTopology: true,
}) 
}

module.exports = connectDB
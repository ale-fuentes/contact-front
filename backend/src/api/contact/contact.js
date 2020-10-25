const restful = require('node-restful')
const mongoose = restful.mongoose

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Contact', contactSchema)
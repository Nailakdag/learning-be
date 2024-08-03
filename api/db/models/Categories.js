const mongoose = require('mongoose')

const schema = mongoose.Schema({
    is_active: { type: Boolean, default: true },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },

}, {
    versionKey: false,
    createdAt: "created_at",
    updatedAt: "updated_at"
})

class Categories extends mongoose.Model {
    constructor() {
        super(schema)
    }
}

schema.loadClass(Categories)
module.exports = mongoose.model('categories', schema)
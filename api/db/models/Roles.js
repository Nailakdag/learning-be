const mongoose = require('mongoose')

const schema = mongoose.Schema({
    role_name: { type: String, required: true },
    is_active: { type: Boolean, default: true },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
}, {
    versionKey: false,
    createdAt: "created_at",
    updatedAt: "updated_at"
})

class Roles extends mongoose.Model {
    constructor() {
        super(schema)
    }
}

schema.loadClass(Roles)
module.exports = mongoose.model('roles', schema)
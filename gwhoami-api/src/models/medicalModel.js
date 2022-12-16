const { default: mongoose } = require("mongoose");

const medicalSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, index: true},
    regular: [mongoose.Schema.Types.Mixed],
    immune: [mongoose.Schema.Types.Mixed],
    allergi: [mongoose.Schema.Types.Mixed],
    healthinfo: [mongoose.Schema.Types.Mixed],
    surgery: [mongoose.Schema.Types.Mixed],
    medication: [mongoose.Schema.Types.Mixed]
}, {autoCreate: true});

module.exports = {
    MedicalList: mongoose.model("MedicalList", medicalSchema)
}
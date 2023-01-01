const { default: mongoose } = require("mongoose");

const certificateSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, index: true},
    personal: [mongoose.Schema.Types.Mixed],
    religious: [mongoose.Schema.Types.Mixed],
    identity: [mongoose.Schema.Types.Mixed],
    education: [mongoose.Schema.Types.Mixed],
    honorable: [mongoose.Schema.Types.Mixed]
}, {autoCreate: true});

module.exports = {
    CertificateList: mongoose.model("CertificateList", certificateSchema)
}
const { default: mongoose } = require("mongoose");

const insuranceSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, index: true},
    insurance: [mongoose.Schema.Types.Mixed],
    result: [mongoose.Schema.Types.Mixed],
    other: [mongoose.Schema.Types.Mixed]
}, {autoCreate: true});

module.exports = {
    InsuranceList: mongoose.model("InsuranceList", insuranceSchema)
}
const { default: mongoose } = require("mongoose");

const insuranceSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, index: true},
    hinsurance: [mongoose.Schema.Types.Mixed],
    monthlypay: [mongoose.Schema.Types.Mixed],
    propertypay: [mongoose.Schema.Types.Mixed],
    vehiclespay: [mongoose.Schema.Types.Mixed],
    result: [mongoose.Schema.Types.Mixed]
}, {autoCreate: true});

module.exports = {
    InsuranceList: mongoose.model("InsuranceList", insuranceSchema)
}
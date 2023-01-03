const { default: mongoose } = require("mongoose");

const financialSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, index: true},
    income: [mongoose.Schema.Types.Mixed],
    assets: [mongoose.Schema.Types.Mixed],
    liability: [mongoose.Schema.Types.Mixed],
    monthlyexpense: [mongoose.Schema.Types.Mixed]
}, {autoCreate: true});

module.exports = {
    FinancialList: mongoose.model("FinancialList", financialSchema)
}
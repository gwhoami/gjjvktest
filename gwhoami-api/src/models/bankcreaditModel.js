const { default: mongoose } = require("mongoose");

const bankcreditSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, index: true},
    general: [mongoose.Schema.Types.Mixed],
    creditcard: [mongoose.Schema.Types.Mixed]
    
}, {autoCreate: true});

module.exports = {
    BankcreditList: mongoose.model("BankcreditList", bankcreditSchema)
}
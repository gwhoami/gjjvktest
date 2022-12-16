const { default: mongoose } = require("mongoose");

const propertySchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, index: true},
    general: [mongoose.Schema.Types.Mixed],
    house: [mongoose.Schema.Types.Mixed],
    houseitems: [mongoose.Schema.Types.Mixed],
    vehicles: [mongoose.Schema.Types.Mixed]
}, {autoCreate: true});

module.exports = {
    PropertyList: mongoose.model("PropertyList", propertySchema)
}
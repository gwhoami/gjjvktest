const { default: mongoose } = require("mongoose");

const profileSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, index: true},
    general: [mongoose.Schema.Types.Mixed],
    job: [mongoose.Schema.Types.Mixed],
    business: [mongoose.Schema.Types.Mixed]
}, {autoCreate: true});

module.exports = {
    ProfileList: mongoose.model("ProfileList", profileSchema)
}
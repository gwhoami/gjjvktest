const { default: mongoose } = require("mongoose");

const educationSchema = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, index: true},
    schools: [mongoose.Schema.Types.Mixed],
    colleges: [mongoose.Schema.Types.Mixed],
    others: [mongoose.Schema.Types.Mixed]
}, {autoCreate: true});

module.exports = {
    EducationList: mongoose.model("EducationList", educationSchema)
}
import mongoose from 'mongoose';

const groupSchema = mongoose.Schema({
    groupName: {type: String, required},
    description: {type: String, required},
    tags: [{type: String, default: []}],
    image: {type: String},
    capacity: {type: Number, required},
    members: [{type: mongoose.Schema.Types.Objectid, ref: "userModel", default: []}]
});

const groupModel = mongoose.model('groupModel', groupSchema);

export default groupModel;
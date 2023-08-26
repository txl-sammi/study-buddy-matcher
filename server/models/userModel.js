import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    groups: [{type: mongoose.Schema.Types.ObjectId, ref: "groupModel", default: []}]
    
});

const userModel = mongoose.model('userModel', userSchema);

export default userModel;
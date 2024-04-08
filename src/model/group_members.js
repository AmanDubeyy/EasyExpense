import mongoose, { Schema } from "mongoose";

const GroupMemberSchema = new Schema({
    group_id : String,
    user_id : String,
    added_by : String
}, {strict : false})

const GroupMember = mongoose.models.group_member || mongoose.model('group_member', GroupMemberSchema);

export default GroupMember; 
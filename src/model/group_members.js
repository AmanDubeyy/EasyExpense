import mongoose, { Schema } from "mongoose";

const GroupMemberSchema = new Schema({
    group_id : String,
    user_id : String,
    added_by : String
}, {strict : false})

const GroupMember = mongoose.models.group_member || mongoose.model('group_member', GroupMemberSchema);

GroupMemberSchema.statics.addMemeber = function(group_id, group_name, user_id, added_by) {
    return this.create({
        group_id : group_id,
        group_name : group_name,
        user_id : user_id,
        added_by : added_by
    })
};
export default GroupMember; 
import mongoose, { Schema } from "mongoose";

const GroupSchema = new Schema({
    group_name : String,
    user_ids : Array
}, {strict : false})

const Group = mongoose.models.group || mongoose.model('group', GroupSchema);

export default Group;
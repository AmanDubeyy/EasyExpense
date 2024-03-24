import mongoose, { Schema } from "mongoose";

const GroupSchema = new Schema({
    'group_name' : String,
    'user_ids' : array
})

const Group = mongoose.models.group || mongoose.model('group', GroupSchema);

export default Group;
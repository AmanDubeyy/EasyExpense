'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function page({user_id}) {
    user_id = 2;

    const [groups, setGroups] = useState([]);
    const [refresh, setRefresh] = useState(true);
    useEffect(() => {
        axios.post('/api/get-groups', {user_id : user_id})
            .then(response => {
                setGroups(response?.data?.data);
            })
            .catch(error => {
                console.error('Error fetching groups:', error);
            });
    }, [refresh]); 

    const [groupPopUp, setGroupPopUp] = useState(false)
    const handleGroupPopup = () => {
        setGroupPopUp(!groupPopUp)
    }

    const [groupName, setGroupName] = useState('')
    const handleGroupNameChange = (e) => {
        setGroupName(e.target.value)
    }

    const CreateGroup = async (data) => {
        await axios.post("/api/create-group", { data })
        .then((response) => {
            handleGroupPopup()
            setRefresh(!refresh);         
        });
    }

    const handleGroupCreation = () => {
        const data = {
            group_name: groupName,
            user_id : user_id,
        }
        CreateGroup(data);
    }

    const GroupListContainer = () => {
        return (
            <div className='flex flex-col items-center p-6 border-2 border-white rounded-xl'>
                <div className='text-3xl mb-6 text-my-blue'>Your Groups</div>
                {Object.keys(groups).map(key => (
                    <p key={key} className='p-2 text-xl'>{groups[key]?.group_name}</p>
                ))}
                <button className='bg-my-blue my-6 p-2 text-xl rounded-xl' onClick={handleGroupPopup}>Create Group</button>
            </div>
        )
    }

    const CreateGroupPopUp = () => {
        return (
            <div className='flex flex-col items-center p-4'>
                <div className='text-2xl mb-10 text-my-blue font-outline-white-2'>Start a new Group</div>
                <input
                    className="p-2 rounded-xl focus:outline-my-blue text-black"
                    type="text"
                    placeholder="enter group name"
                    value={groupName}
                    onChange={(e) => handleGroupNameChange(e)}
                />
                <button className='p-2 my-6 rounded-xl text-2xl bg-my-blue' onClick={handleGroupCreation}>Done</button>
            </div>
        )
    }

    return (
        <div>
            <div className='fixed inset-0 z-50 items-center flex flex-row justify-evenly bg-my-light-blue '>
                {!groupPopUp ? <GroupListContainer /> : CreateGroupPopUp()}
            </div>
        </div>
    )
}

export default page
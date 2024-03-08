import React, {useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data=useLoaderData()
    // const [follower,setFollower]=useState(0);
    // const [gid,setGid]=useState("Github User");
    // const[dp,setDp]=useState("")
    
    //         setFollower(data.followers)
    //         setGid(data.login)
    //         setDp(data.avatar_url)
   

    return (
        <div className='text-center m-4 bg-gray-700 p-4 text-white text-3xl'>
            <h1 >ID:{data.login}</h1>
            Github Followers:{data.followers}
            <img src={data.avatar_url} alt="user profile" className='rounded-full m-auto' width={300}/>
        </div>
    )
}

export default Github

export const githubInfoLoader=async ()=>{
    const res= await fetch("https://api.github.com/users/the-anik-2004");
    return res.json();
}

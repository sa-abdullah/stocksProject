// import {useState, useEffect } from 'react'
import { useGlobal } from '../components/global.jsx'



const Dashboard = () => {
    const { user } = useGlobal()
    console.log(user)

    return (
        <div className="w-screen h-screen bg-gray-100">
            <nav className="flex items-center p-4">
                {user?.displayName}
                {user.email}
                <img src={user.photoURL} alt="" className="w-10 h-10 rounded-md"/>
            </nav>
        </div>
    )
}

export default Dashboard
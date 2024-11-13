import React from 'react';

const ViewProfile = ({ user }) => {
    console.log("FROM", user)


    return (
        <div>
            <img className='w-36 h-36 border-4 border-purple-600 mt-10 rounded-full mx-auto '
                src={user?.photoURL || "https://i.ibb.co.com/8NBsygy/img-UNknon.jpg"} alt="" />
            <div className='text-center my-5 space-y-1'>
                <h3 className='text-2xl font-bold'>Name: {user?.displayName} </h3>
                <p className='text-lg font-light'>Email: {user?.email}</p>
                <p className='text-lg font-light'>Email Status: {`${user?.emailVerified}`}</p>
            </div>
        </div>
    );
};

export default ViewProfile;
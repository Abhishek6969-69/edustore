import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <div className=" relative  h-44 ">
       <img  className="rounded-[50%] absolute left-[45%]" src={user.picture} alt={user.name} />
       <h1 className=" absolute left-[47%]  top-36  font-bold text-lg ">Profile</h1>
       </div>
       <div className="  ml-[30%]  w-6/12 my-4">
       <div className=" flex gap-40 my-5 mx-24">
        <h2>Full Name</h2>
        <h2>Abhishek Yadav</h2>
        </div>
        <div className=" flex gap-32 my-5 mx-24">
        <h2>Mobile Number</h2>
        <h2>9696694046</h2>
        </div>
        <div className=" flex gap-32 my-5 mx-24">
        <h2>Email</h2>
        <p>sbh123yadav@gmail.com</p>
        </div>
        <div className=" flex  gap-52 my-5 mx-24">
        <h2>Gender</h2>
        <h2>Male</h2>
        </div>
        <div className=" flex gap-36 my-5 mx-24">
        <h2>Date of birth</h2>
        <h2>14/06/2004</h2>
        </div>
        </div>
      </div>
    )
  );
};

export default Profile;
import React, { useEffect, useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import profile from "../assets/profile.png";
import { BiCamera } from "react-icons/bi";
type Props = {};

const ProfilePage = (props: Props) => {
  const { authUser, isUpdatingProfile, updateProfile, isCheckingAuth } =
    useAuthStore();
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };
  console.log(authUser);

  return (
    <div className="flex pt-14 justify-center items-center container h-[44rem]">
      <div className="rounded-xl p-5 flex flex-col items-center justify-center gap-2 bg-base-300 w-[40rem]">
        <div className="mb-2 text-center">
          <h1>Profile</h1>
          <h3>Your Profile Information</h3>
        </div>
        <div className="rounded-full border-4 relative">
          <img
            className="border-4 border-black rounded-full size-32 object-cover"
            src={selectedImage || authUser.profilePic || profile}
            alt="Profile Image"
          />
          <label
            className={`transition-all duration-200 ${
              isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
            }`}
            htmlFor="camera"
          >
            <div className="bg-base-content rounded-full w-fit text-white p-2 absolute -bottom-1 right-1 cursor-pointer">
              <BiCamera className="text-xl" />
            </div>
            <input
              className="hidden"
              id="camera"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={isUpdatingProfile}
            />
          </label>
        </div>
        <p>
          {isUpdatingProfile
            ? "Updating Profile Picture..."
            : "Click the camera icon to update your profile picture"}
        </p>

        <div className="w-full my-5">
          <label className="text-xs" htmlFor="">
            Full Name
          </label>
          <br />
          <p className="px-3 py-1 rounded-lg outline-none border border-base-content w-full cursor-not-allowed">
            {authUser?.fullName}
          </p>
          <label className="text-xs" htmlFor="">
            Email Address
          </label>
          <br />
          <p className="px-3 py-1 rounded-lg outline-none border border-base-content w-full cursor-not-allowed">
            {authUser?.email}
          </p>
        </div>
        <div className="w-full">
          <h1>Account Information</h1>
          <div className="flex justify-between w-full border-b py-2">
            <p>Member Since</p>
            <p>{authUser.createdAt?.split("T")[0]}</p>
          </div>
          <div className="flex justify-between w-full py-2">
            <p>Account Status</p>
            <p className="text-green-500">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

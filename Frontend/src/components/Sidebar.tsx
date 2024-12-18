import React, { useEffect } from "react";
import { useChatStore } from "../store/chatStore";
import { useAuthStore } from "../store/useAuthStore";
import profile from "../assets/profile.png";
type Props = {};

const Sidebar = (props: Props) => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();
  // const onlineUsers=[];
  useEffect(() => {
    getUsers();
  }, [getUsers]);
  if (isUsersLoading) return <div>Loading...</div>;
  return (
    <aside>
      <div>
        <h1>Contacts</h1>
      </div>
      {users.map((u: any, i: number) => (
        <button
          key={i}
          onClick={() => setSelectedUser(u)}
          className={`flex hover:bg-base-200 py-3 px-2 w-full ${
            selectedUser?._id === u._id
              ? "bg-base-300 ring-1 ring-base-300"
              : ""
          }`}
        >
          <div className="flex items-center gap-3">
            <div className=" size-14 rounded-full overflow-hidden">
              <img
                className=" size-14 object-cover rounded-full"
                src={u.profilePic || profile}
                alt="profile"
              />
            </div>
            <div className="text-start">
              <h1 className="font-bold"> {u.fullName}</h1>
              <p className="hidden md:block">offline</p>
            </div>
          </div>
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;

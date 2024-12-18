import React from "react";
import profile from "../assets/profile.png";
import { useChatStore } from "../store/chatStore";
import { CgClose } from "react-icons/cg";
type Props = {};

const ChatHeader = (props: Props) => {
  const { selectedUser, setSelectedUser } = useChatStore();
  return (
    <div>
      <div className="flex shadow-sm shadow-base-300 justify-between items-center px-4">
        <div className={`flex hover:bg-base-200 py-3 px-2`}>
          <div className="flex items-center gap-3">
            <div className=" size-14 rounded-full overflow-hidden">
              <img
                className=" size-14 object-cover rounded-full"
                src={selectedUser.profilePic || profile}
                alt="profile"
              />
            </div>
            <div className="text-start">
              <h1 className="font-bold"> {selectedUser.fullName}</h1>
            </div>
          </div>
        </div>
        <div className="text-4xl" onClick={() => setSelectedUser(null)}>
          <CgClose />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;

import React from "react";
import { useChatStore } from "../store/chatStore";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";

type Props = {};

const HomePage = (props: Props) => {
  const { selectedUser } = useChatStore();
  return (
    <div>
      <div className="flex h-screen border border-red-500">
        <div className="w-1/2 md:w-1/4 border border-blue-500">
          <Sidebar />
        </div>
        <div className="w-1/2 md:w-3/4 border border-blue-500">
          {selectedUser ? (
            <ChatContainer />
          ) : (
            <div className="text-center">Select User To chat with</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

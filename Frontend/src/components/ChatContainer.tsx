import React, { useEffect } from "react";
import { useChatStore } from "../store/chatStore";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";

type Props = {};

const ChatContainer = (props: Props) => {
  const { messages, getMessages, selectedUser, isMessagesLoading } =
    useChatStore();
  useEffect(() => {
    getMessages(selectedUser._id);
  }, [selectedUser, getMessages]);
  if (isMessagesLoading) return <div>Loading Messages...</div>;
  return (
    <div>
      <ChatHeader />
      <p>messages...</p>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;

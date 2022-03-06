import {
  TweetComponent,
  TweetContainer,
  TweetBox,
  TweetActions,
  TweetButton,
} from "./newTweetComponentStyles";
import { FaRegImage, FaRegSmile } from "react-icons/fa";
import { RiFileGifLine } from "react-icons/ri";
import { BiPoll } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import IconButton from "../IconButton/IconButton";
import { useState } from "react";
import Avatar from "../Avatar/Avatar";

const NewTweetComponent = ({addTweet}) => {
  const [tweet,setTweet]=useState("");
  return (
    <TweetComponent>
      <Avatar image={"https://placeimg.com/50/50/animals"} />
      <TweetContainer>
        <TweetBox
          placeholder="What's happening?"
          contenteditable="true"
          value={tweet}
          onChange={e=>setTweet(e.target.value)}
        ></TweetBox>
        <TweetActions>
          <div>
            <IconButton
              icon={<FaRegImage />}
              blue="true"
              action="true"
              tooltip="Media"
            ></IconButton>
            

            <IconButton
              icon={<RiFileGifLine />}
              blue="true"
              action="true"
              tooltip="GIF"
            ></IconButton>

            <IconButton
              icon={<BiPoll />}
              blue="true"
              action="true"
              tooltip="Poll"
            ></IconButton>

            <IconButton
              icon={<FaRegSmile />}
              blue="true"
              action="true"
              tooltip="Emoji"
            ></IconButton>

            <IconButton
              icon={<AiOutlineSchedule />}
              blue="true"
              action="true"
              tooltip="Schedule"
            ></IconButton>
 
          </div>
            <TweetButton onClick={()=>{addTweet(tweet);setTweet("")}}>Tweet</TweetButton>
        </TweetActions>
      </TweetContainer>
    </TweetComponent>
  );
};

export default NewTweetComponent;

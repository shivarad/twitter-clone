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
import { Colors } from "../../styles/colors";

const NewTweetComponent = ({ addTweet, user }) => {
  const [tweet, setTweet] = useState("");
  return (
    <TweetComponent>
      <Avatar image={user.profile_picture} />
      <TweetContainer>
        <TweetBox
          placeholder="What's happening?"
          contenteditable="true"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        ></TweetBox>
        <TweetActions>
          <div>
            <IconButton
              icon={<FaRegImage />}
              color={Colors.Blue}
              hover={Colors.LightBlue}
              action="true"
              tooltip="Media"
            ></IconButton>

            <IconButton
              icon={<RiFileGifLine />}
              color={Colors.Blue}
              hover={Colors.LightBlue}
              action="true"
              tooltip="GIF"
            ></IconButton>
            {/* desktop only */}
            <span>
              <IconButton
                icon={<BiPoll />}
                color={Colors.Blue}
                hover={Colors.LightBlue}
                action="true"
                tooltip="Poll"
              ></IconButton>
            </span>
            <IconButton
              icon={<FaRegSmile />}
              color={Colors.Blue}
              hover={Colors.LightBlue}
              action="true"
              tooltip="Emoji"
            ></IconButton>

            <IconButton
              icon={<AiOutlineSchedule />}
              color={Colors.Blue}
              hover={Colors.LightBlue}
              action="true"
              tooltip="Schedule"
            ></IconButton>
          </div>
          <TweetButton
            onClick={() => {
              addTweet(tweet);
              setTweet("");
            }}
          >
            Tweet
          </TweetButton>
        </TweetActions>
      </TweetContainer>
    </TweetComponent>
  );
};

export default NewTweetComponent;

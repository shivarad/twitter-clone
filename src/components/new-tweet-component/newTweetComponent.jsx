import {
  TweetComponent,
  Avatar,
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
import ReactTooltip from "react-tooltip";

const NewTweetComponent = () => {
  return (
    <TweetComponent>
      <Avatar profileImg="http://placeimg.com/50/50/animals" />
      <TweetContainer>
        <TweetBox
          placeholder="What's happening?"
          contenteditable="true"
        ></TweetBox>
        <TweetActions>
          <div>
            <IconButton
              icon={<FaRegImage />}
              blue="true"
              action="true"
              data-tip="Media"
              data-for="media"
            ></IconButton>
            <ReactTooltip
              id="media"
              place="bottom"
              type="dark"
              effect="solid"
            />

            <IconButton
              icon={<RiFileGifLine />}
              blue="true"
              action="true"
              data-tip="GIF"
              data-for="gif"
            ></IconButton>
            <ReactTooltip id="gif" place="bottom" type="dark" effect="solid" />

            <IconButton
              icon={<BiPoll />}
              blue="true"
              action="true"
              data-tip="Poll"
              data-for="poll"
            ></IconButton>
            <ReactTooltip id="poll" place="bottom" type="dark" effect="solid" />

            <IconButton
              icon={<FaRegSmile />}
              blue="true"
              action="true"
              data-tip="Emoji"
              data-for="emoji"
            ></IconButton>
            <ReactTooltip
              id="emoji"
              place="bottom"
              type="dark"
              effect="solid"
            />

            <IconButton
              icon={<AiOutlineSchedule />}
              blue="true"
              action="true"
              data-tip="Schedule"
              data-for="schedule"
            ></IconButton>
            <ReactTooltip
              id="Schedule"
              place="bottom"
              type="dark"
              effect="solid"
            />
          </div>

          <TweetButton>Tweet</TweetButton>
        </TweetActions>
      </TweetContainer>
    </TweetComponent>
  );
};

export default NewTweetComponent;

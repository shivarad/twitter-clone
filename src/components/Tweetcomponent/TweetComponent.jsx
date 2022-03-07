import IconButton from "../IconButton/IconButton";
import { MdOutlineMoreHoriz, MdOutlineFileUpload } from "react-icons/md";
import { FaRegComment, FaRetweet, FaRegHeart } from "react-icons/fa";
import {
  TweetContainer,
  TweetContent,
  TweetHeader,
  TweetActions,
} from "./TweetComponentStyles";
import Avatar from "../Avatar/Avatar";
import moment from "moment";
import { Colors } from "../../styles/colors";
import reactStringReplace from "react-string-replace";
import Menu from "../Menu/Menu";
import { useState } from "react";
import { nanoid } from "nanoid";
import users from "../../data/users.json";
import { useEffect } from "react";
const TweetComponent = ({ tweet }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(users.filter((user) => user.user === tweet.user)[0]);
    console.log(user);
  }, [user, tweet]);
  const calculateTimeDiff = () => {
    let Now = new Date(Date.now());
    let TweetDate = new Date(tweet.created_on);
    let Time = Date.now() - TweetDate;
    let Days = Time / (1000 * 3600 * 24);
    if (Days < 1) {
      return moment(tweet.created_on).fromNow();
    } else {
      if (Now.getFullYear() === TweetDate.getFullYear())
        return tweet.created_on.split(" ")[1] + " " + TweetDate.getDay();
      else
        return (
          tweet.created_on.split(" ")[1] +
          " " +
          TweetDate.getDay() +
          ", " +
          TweetDate.getFullYear()
        );
    }
  };

  const TweetReplacing = (text) => {
    // Match URLs
    let replacedText = reactStringReplace(
      text,
      /(https?:\/\/\S+)/g,
      (match, i) => (
        <a key={nanoid()} href={match}>
          {match}
        </a>
      )
    );

    // Match @-mentions
    replacedText = reactStringReplace(replacedText, /@(\w+)/g, (match, i) => (
      <a key={nanoid()} href={`https://twitter.com/${match}`}>
        @{match}
      </a>
    ));

    // Match hashtags
    replacedText = reactStringReplace(replacedText, /#(\w+)/g, (match, i) => (
      <a key={nanoid()} href={`https://twitter.com/hashtag/${match}`}>
        #{match}
      </a>
    ));
    return replacedText;
  };
  return (
    user && (
      <div style={{ position: "relative" }}>
        <Menu open={menuOpen} user={tweet.user} setOpen={setMenuOpen} />
        <TweetContainer>
          <Avatar image={user.profile_picture} />
          <TweetContent>
            <TweetHeader>
              <p>
                {user.display_name}
                <span>
                  {" @"}
                  {tweet.user}
                  {" . "}
                  {calculateTimeDiff().toString()}
                </span>
              </p>
              <IconButton
                color={Colors.LightGray}
                hover={Colors.ExtraLightGray}
                hoverColor={Colors.Blue}
                icon={<MdOutlineMoreHoriz />}
                action="true"
                tooltip="More"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(true);
                }}
              />
            </TweetHeader>
            <p style={{ lineHeight: "20px" }}>
              {TweetReplacing(tweet.content)}
            </p>
            {tweet.imageUrl && (
              <img
                src={tweet.imageUrl}
                alt="tweet"
                style={{
                  width: "clamp(220px,80%,600px)",
                  border: `1px solid ${Colors.LightGray}`,
                  borderRadius: "15px",
                }}
                loading="lazy"
              />
            )}
            <TweetActions>
              <span className="blue">
                <IconButton
                  icon={<FaRegComment />}
                  color={Colors.LightGray}
                  hover={Colors.LightBlue}
                  hoverColor={Colors.Blue}
                  action="true"
                />
                {tweet.comments_count}
              </span>
              <span className="green">
                <IconButton
                  icon={<FaRetweet />}
                  color={Colors.LightGray}
                  hover="lightgreen"
                  hoverColor="green"
                  action="true"
                />
                {tweet.retweets_count}
              </span>
              <span className="red">
                <IconButton
                  icon={<FaRegHeart />}
                  color={Colors.LightGray}
                  hover="lightpink"
                  hoverColor="red"
                  action="true"
                />
                {tweet.favorites_count}
              </span>
              <span className="blue">
                <IconButton
                  icon={<MdOutlineFileUpload />}
                  color={Colors.LightGray}
                  hover={Colors.LightBlue}
                  hoverColor={Colors.Blue}
                  action="true"
                />
              </span>
            </TweetActions>
          </TweetContent>
        </TweetContainer>
      </div>
    )
  );
};

export default TweetComponent;

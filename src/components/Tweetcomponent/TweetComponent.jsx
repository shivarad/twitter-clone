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
    console.log(user)
  }, [user,tweet]);
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
    user&&<TweetContainer>
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
            icon={<MdOutlineMoreHoriz />}
            blue="true"
            action="true"
            tooltip="More"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(true);
            }}
          />
          <Menu open={menuOpen} user={tweet.user} setOpen={setMenuOpen} />
        </TweetHeader>
        <p>{TweetReplacing(tweet.content)}</p>
        {tweet.imageUrl && (
          <img
            src={tweet.imageUrl}
            alt="tweet"
            style={{
              maxWidth: "600px",
              border: `1px solid ${Colors.LightGray}`,
              borderRadius: "15px",
            }}
            loading="lazy"
          />
        )}
        <TweetActions>
          <span>
            <FaRegComment />
            <p>{tweet.comments_count}</p>
          </span>
          <span>
            <FaRetweet className="green" />
            <p>{tweet.retweets_count}</p>
          </span>
          <span>
            <FaRegHeart className="red" />
            <p>{tweet.favorites_count}</p>
          </span>
          <span>
            <MdOutlineFileUpload className="blue" />
          </span>
        </TweetActions>
      </TweetContent>
    </TweetContainer>
  );
};

export default TweetComponent;

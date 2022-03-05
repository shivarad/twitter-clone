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

const TweetComponent = ({ tweet }) => {

    const calculateTimeDiff=()=>{
        let Now=new Date(Date.now())
        let TweetDate=new Date(tweet.created_on);
        let Time = Date.now() -TweetDate ; 
        let Days = Time / (1000 * 3600 * 24);
    if (Days<1){
        return moment(tweet.created_on).fromNow()
    }
    else {
        if(Now.getFullYear()===TweetDate.getFullYear())
            return tweet.created_on.split(" ")[1] +" "+TweetDate.getDay()
        else 
            return tweet.created_on.split(" ")[1] +" "+TweetDate.getDay()+", "+TweetDate.getFullYear()
    }
    }
  return (
    <TweetContainer>
      <Avatar image={"https://placeimg.com/40/40/animals"} />
      <TweetContent>
        <TweetHeader>
          <p>
            {tweet.display_name}
            <span>
              {" @"}
              {tweet.user}{" . "}{calculateTimeDiff().toString()}
            </span>
          </p>
          <IconButton
            icon={<MdOutlineMoreHoriz />}
            blue="true"
            action="true"
            tooltip="More"
          />
        </TweetHeader>
        <p>{tweet.content}</p>
        {tweet.imageUrl && (
          <img
            src={tweet.imageUrl}
            alt="tweet"
            style={{
              maxWidth: "600px",
              border: `1px solid ${Colors.LightGray}`,
              borderRadius: "15px",
            }}
          />
        )}
        <TweetActions>
          <span>
            <FaRegComment />
            <p>{tweet.comments_count}</p>
          </span>
          <span>
            <FaRetweet />
            <p>{tweet.retweets_count}</p>
          </span>
          <span>
            <FaRegHeart />
            <p>{tweet.favorites_count}</p>
          </span>
          <span>
            <MdOutlineFileUpload />
          </span>
        </TweetActions>
      </TweetContent>
    </TweetContainer>
  );
};

export default TweetComponent;

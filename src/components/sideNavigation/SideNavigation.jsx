import { Navigation,TweetButton} from "./sideNavigationStyles";
import {FaTwitter,FaHashtag,FaRegEnvelope,FaRegBookmark,FaRegListAlt,FaRegUser} from "react-icons/fa";
import {RiHome7Fill} from "react-icons/ri";
import {BiBell} from "react-icons/bi";
import {IoEllipsisHorizontalCircleOutline} from "react-icons/io5";
import  IconButton  from "../IconButton/IconButton";

const SideNavigation = () => {
  return (
    <Navigation>
      <IconButton title="" icon={<FaTwitter/>} blue="true"/>
      <IconButton title="home" icon={<RiHome7Fill/>}/>
      <IconButton title="explore" icon={<FaHashtag/>}/>
      <IconButton title="notifications" icon={<BiBell/>}/>
      <IconButton title="messages" icon={<FaRegEnvelope/>}/>
      <IconButton title="bookmarks" icon={<FaRegBookmark/>}/>
      <IconButton title="lists" icon={<FaRegListAlt/>}/>
      <IconButton title="profile" icon={<FaRegUser/>}/>
      <IconButton title="more" icon={<IoEllipsisHorizontalCircleOutline/>}/>
      <TweetButton>Tweet</TweetButton>
    </Navigation>
  );
};

export default SideNavigation;

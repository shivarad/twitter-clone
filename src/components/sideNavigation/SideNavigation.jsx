import { Navigation,TwitterIcon ,TweetButton} from "./sideNavigationStyles";
import {FaTwitter,FaHashtag,FaRegEnvelope,FaRegBookmark,FaRegListAlt,FaRegUser} from "react-icons/fa";
import {RiHome7Fill} from "react-icons/ri";
import {BiBell} from "react-icons/bi";
import {IoEllipsisHorizontalCircleOutline} from "react-icons/io5";
import  NavButton  from "../navButtons/navButtons";

const SideNavigation = () => {
  return (
    <Navigation>
      <TwitterIcon><FaTwitter/></TwitterIcon>
      <NavButton title="home" icon={<RiHome7Fill/>}/>
      <NavButton title="explore" icon={<FaHashtag/>}/>
      <NavButton title="notifications" icon={<BiBell/>}/>
      <NavButton title="messages" icon={<FaRegEnvelope/>}/>
      <NavButton title="bookmarks" icon={<FaRegBookmark/>}/>
      <NavButton title="lists" icon={<FaRegListAlt/>}/>
      <NavButton title="profile" icon={<FaRegUser/>}/>
      <NavButton title="more" icon={<IoEllipsisHorizontalCircleOutline/>}/>
      <TweetButton>Tweet</TweetButton>
    </Navigation>
  );
};

export default SideNavigation;

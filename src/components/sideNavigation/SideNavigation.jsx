import { Navigation, TweetButton } from "./sideNavigationStyles";
import {
  FaTwitter,
  FaHashtag,
  FaRegEnvelope,
  FaRegBookmark,
  FaRegListAlt,
  FaRegUser,
} from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import { IoEllipsisHorizontalCircleOutline } from "react-icons/io5";
import IconButton from "../IconButton/IconButton";
import { Colors } from "../../styles/colors";

const SideNavigation = () => {
  return (
    <Navigation>
      <IconButton
        title=""
        icon={<FaTwitter />}
        color={Colors.Blue}
        hover={Colors.LightBlue}
      />
      <IconButton
        title="home"
        icon={<RiHome7Fill />}
        color={Colors.Black}
        hover={Colors.ExtraLightGray}
      />
      <IconButton
        title="explore"
        icon={<FaHashtag />}
        color={Colors.Black}
        hover={Colors.ExtraLightGray}
      />
      <IconButton
        title="notifications"
        icon={<BiBell />}
        color={Colors.Black}
        hover={Colors.ExtraLightGray}
      />
      <IconButton
        title="messages"
        icon={<FaRegEnvelope />}
        color={Colors.Black}
        hover={Colors.ExtraLightGray}
      />
      <IconButton
        title="bookmarks"
        icon={<FaRegBookmark />}
        color={Colors.Black}
        hover={Colors.ExtraLightGray}
      />
      <IconButton
        title="lists"
        icon={<FaRegListAlt />}
        color={Colors.Black}
        hover={Colors.ExtraLightGray}
      />
      <IconButton
        title="profile"
        icon={<FaRegUser />}
        color={Colors.Black}
        hover={Colors.ExtraLightGray}
      />
      <IconButton
        title="more"
        icon={<IoEllipsisHorizontalCircleOutline />}
        color={Colors.Black}
        hover={Colors.ExtraLightGray}
      />
      <TweetButton>Tweet</TweetButton>
    </Navigation>
  );
};

export default SideNavigation;

import { MenuContainer, MenuOption } from "./MenuStyle";
import { RiUserUnfollowLine, RiFlagLine } from "react-icons/ri";
import { MdPostAdd, MdOutlineBlock } from "react-icons/md";
import { IoVolumeMuteOutline } from "react-icons/io5";
import { ImEmbed2 } from "react-icons/im";
import { useEffect, useRef } from "react";
const Menu = ({ open, user, setOpen }) => {
  const ref = useRef(null);

  const OptionClickHandler = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [setOpen]);
  return (
    <>
      {open && (
        <MenuContainer ref={ref}>
          <MenuOption onClick={OptionClickHandler} >
            <RiUserUnfollowLine />
            Unfollow @{user}
          </MenuOption>
          <MenuOption onClick={OptionClickHandler}>
            <MdPostAdd />
            Add/Remove @{user} from Lists
          </MenuOption>
          <MenuOption onClick={OptionClickHandler}>
            <IoVolumeMuteOutline />
            Mute @{user}
          </MenuOption>
          <MenuOption onClick={OptionClickHandler}>
            <IoVolumeMuteOutline />
            Mute This conversation
          </MenuOption>
          <MenuOption onClick={OptionClickHandler}>
            <MdOutlineBlock />
            Block @{user}
          </MenuOption>
          <MenuOption onClick={OptionClickHandler}>
            <ImEmbed2 />
            Embed Tweet
          </MenuOption>
          <MenuOption onClick={OptionClickHandler}>
            <RiFlagLine />
            Report Tweet
          </MenuOption>
        </MenuContainer>
      )}
    </>
  );
};

export default Menu;

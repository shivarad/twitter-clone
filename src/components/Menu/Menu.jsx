import { MenuContainer, MenuOption } from "./MenuStyle";
import { RiUserUnfollowLine, RiFlagLine } from "react-icons/ri";
import { MdPostAdd, MdOutlineBlock } from "react-icons/md";
import { IoVolumeMuteOutline } from "react-icons/io5";
import { ImEmbed2 } from "react-icons/im";
import { useEffect, useRef } from "react";
import { FaRegFrown } from "react-icons/fa";
import { IconContext } from "react-icons";

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
          <IconContext.Provider value={{ size: "20px" }}>
            <MenuOption onClick={OptionClickHandler}>
              <span>
                <FaRegFrown />
              </span>
              Not intrested in this tweet
            </MenuOption>

            <MenuOption onClick={OptionClickHandler}>
              <span>
                <RiUserUnfollowLine />
              </span>
              Unfollow @{user}
            </MenuOption>
            <MenuOption onClick={OptionClickHandler}>
              <span>
                <MdPostAdd />
              </span>
              Add/Remove @{user} from Lists
            </MenuOption>
            <MenuOption onClick={OptionClickHandler}>
              <span>
                <IoVolumeMuteOutline />
              </span>
              Mute @{user}
            </MenuOption>
            <MenuOption onClick={OptionClickHandler}>
              <span>
                <IoVolumeMuteOutline />
              </span>
              Mute This conversation
            </MenuOption>
            <MenuOption onClick={OptionClickHandler}>
              <span>
                <MdOutlineBlock />
              </span>
              Block @{user}
            </MenuOption>
            <MenuOption onClick={OptionClickHandler}>
              <span>
                <ImEmbed2 />
              </span>
              Embed Tweet
            </MenuOption>
            <MenuOption onClick={OptionClickHandler}>
              <span>
                {" "}
                <RiFlagLine />
              </span>
              Report Tweet
            </MenuOption>
          </IconContext.Provider>
        </MenuContainer>
      )}
    </>
  );
};

export default Menu;

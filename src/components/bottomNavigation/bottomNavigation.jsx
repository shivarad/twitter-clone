import { BiBell, BiSearch } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import IconButton from "../IconButton/IconButton";
import {NavigationContainer} from "./bottomNavigationStyles";

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <IconButton  icon={<RiHome7Fill />} />
      <IconButton  icon={<BiSearch />} />
      <IconButton  icon={<BiBell />} />
      <IconButton  icon={<FaRegEnvelope />} />
    </NavigationContainer>
  );
};

export default BottomNavigation;

import { BiBell, BiSearch } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import { Colors } from "../../styles/colors";
import IconButton from "../IconButton/IconButton";
import { NavigationContainer } from "./bottomNavigationStyles";

const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <IconButton
        color={Colors.Black}
        hover={Colors.ExtraLightGray}
        icon={<RiHome7Fill />}
      />
      <IconButton
        icon={<BiSearch />}
        color={Colors.Black}
        hover={Colors.ExtraLightGray}
      />
      <IconButton
        icon={<BiBell />}
        color={Colors.Black}
        hover={Colors.ExtraLightGray}
      />
      <IconButton
        icon={<FaRegEnvelope />}
        color={Colors.Black}
        hover={Colors.ExtraLightGray}
      />
    </NavigationContainer>
  );
};

export default BottomNavigation;

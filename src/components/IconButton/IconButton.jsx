import { Button } from "./IconButtonStyle";

const IconButton = ({ title, icon, blue = false, action = false }) => {
  return (
    <Button isBlue={blue} isAction={action}>
      {icon}
      {title && <span>{title}</span>}
    </Button>
  );
};

export default IconButton;

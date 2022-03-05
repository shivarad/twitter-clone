import { Button, CustomTooltip } from "./IconButtonStyle";

const IconButton = ({
  title,
  icon,
  blue = false,
  action = false,
  tooltip = "",
}) => {
  return (
    <>
      <Button
        isBlue={blue}
        isAction={action}
        data-tip={tooltip}
        data-for={tooltip}
      >
        {icon}
        {title && <span>{title}</span>}
      </Button>
      {tooltip && (
        <CustomTooltip id={tooltip} place="bottom"
         type="dark" effect="solid" />
      )}
    </>
  );
};

export default IconButton;

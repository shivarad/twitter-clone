import { Button, CustomTooltip } from "./IconButtonStyle";

const IconButton = ({
  title,
  icon,
  hover,
  color,
  hoverColor = "",
  action = false,
  tooltip = "",
  onClick = {},
}) => {
  return (
    <>
      <Button
        hover={hover}
        color={color}
        hoverColor={hoverColor}
        isAction={action}
        data-tip={tooltip}
        data-for={tooltip}
        onClick={onClick}
      >
        {icon}
        {title && <span>{title}</span>}
      </Button>
      {tooltip && (
        <CustomTooltip id={tooltip} place="bottom" type="dark" effect="solid" />
      )}
    </>
  );
};

export default IconButton;

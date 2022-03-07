import { Button, CustomTooltip, BtnContainer } from "./IconButtonStyle";

const IconButton = ({
  title,
  icon,
  hover,
  color,
  hoverColor = "",
  action = false,
  tooltip = "",
  actionTitle="",
  onClick = () => {},
}) => {
  return (
    <BtnContainer hover={hover} color={color} hoverColor={hoverColor}>
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
      {actionTitle && <span>{actionTitle}</span>}
      {tooltip && (
        <CustomTooltip id={tooltip} place="bottom" type="dark" effect="solid" />
      )}
    </BtnContainer>
  );
};

export default IconButton;

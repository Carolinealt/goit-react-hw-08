import { Button } from "@mui/material";

const CustomButton = ({
  variant = "contained",
  color,
  type,
  onClick,
  children,
}) => {
  const sx = {
    backgroundColor: "#008d17;",
  };
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      type={type}
      sx={sx}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

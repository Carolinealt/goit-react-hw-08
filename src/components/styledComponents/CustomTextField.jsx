import { styled, TextField } from "@mui/material";

const CustomTextField = ({ onChange = null }) => {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#A0AAB4",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E0E3E7",
      },
      "&:hover fieldset": {
        borderColor: "#B2BAC2",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#6F7E8C",
      },
    },
    label: { color: "#A0AAB4" },
  });

  return (
    <CssTextField
      required
      id="custom-css-outlined-input"
      label="Required"
      onChange={onChange}
    />
  );
};

export default CustomTextField;

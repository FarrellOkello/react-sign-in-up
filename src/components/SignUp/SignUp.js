import PropTypes from "prop-types";
import { Paper, Typography, Button, Link } from "@material-ui/core";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";

import { FormHeader } from "../FormHeader";
import { TextInputController } from "../TextInputController";

const paperStyle = {
  padding: 20,
  height: "70vh",
  width: 380,
  margin: "20px auto",
};

const submitButtonStyle = { margin: "8px 0" };
const informationStyle = { color: "#1bbd7e", letterSpacing: 2, wordSpacing: 3 };

const SignUp = (props) => {
  const { control, errors, handleSubmitData, setValue } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper component="form" elevation={14} style={paperStyle}>
      <FormHeader avatar={<HowToRegOutlinedIcon />} heading="sign in" />

      <Typography
        color="textSecondary"
        variant="body2"
        style={informationStyle}
      >
        *Fields required
      </Typography>

      <TextInputController
        control={control}
        name="email"
        label="email"
        defaultValue=""
        error={!!errors.email}
        message={errors.email?.message ?? ""}
      />

      <TextInputController
        control={control}
        name="password"
        label="password"
        defaultValue=""
        error={!!errors.password}
        message={errors.password?.message ?? ""}
      />

      <TextInputController
        control={control}
        name="confirmPassword"
        label="confirmPassword"
        defaultValue=""
        error={!!errors.confirmPassword}
        message={errors.confirmPassword?.message ?? ""}
      />

      <Button
        type="submit"
        color="primary"
        style={submitButtonStyle}
        fullWidth
        aria-label="send"
        variant="contained"
        onClick={handleSubmitData}
      >
        send form
      </Button>

      <Typography>
        Do you have an account already?
        <Link onClick={(e, val) => handleChange(e, "1")}> Sign In</Link>
      </Typography>
    </Paper>
  );
};

SignUp.propTypes = {
  control: PropTypes.object,
  errors: PropTypes.object,
  handleSubmitData: PropTypes.func,
};

export default SignUp;
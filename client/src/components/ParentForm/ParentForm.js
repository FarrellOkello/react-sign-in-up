import PropTypes from "prop-types";

import { styles } from "./styles";

import { TextInputController } from "components/Inputs/TextInputController";
import { StyledFormButton } from "components/StyledFormButton";
import { StyledButton } from "components/StyledButton";
import { useNavigate } from "react-router-dom";
import { StyledForm } from "components/StyledForm";
import { StyledTextRequired } from "components/StyledTextRequired";
import { FormHeader } from "components/FormHeader";

const ParentForm = (props) => {
  const { control, errors, handleSubmitData, buttonText, avatar, heading } = props;
  const navigate = useNavigate();
  const handleNavigate = () => navigate(-1);

  return (
    <>
      <StyledForm>
        <FormHeader avatar={avatar} heading={heading} />
        <StyledTextRequired />
        <div style={styles.inputsContainer}>
          <TextInputController
            control={control}
            name="name"
            label="name*"
            defaultValue=""
            error={!!errors.name}
            message={errors.name?.message ?? ""}
            autoFocus
          />
          <TextInputController
            control={control}
            name="contact"
            label="Contact*"
            defaultValue=""
            error={!!errors.contact}
            message={errors.contact?.message ?? ""}
            autoFocus
          />
          <TextInputController
            control={control}
            name="status"
            label="Status*"
            defaultValue=""
            error={!!errors.status}
            message={errors.status?.message ?? ""}
            autoFocus
          />
          {/* <TextInputController
            control={control}
            name="course"
            label="Course*"
            defaultValue=""
            error={!!errors.course}
            message={errors.course?.message ?? ""}
            autoFocus
          /> */}
        </div>
        <StyledFormButton onClick={handleSubmitData} text={buttonText} />
      </StyledForm>

      <StyledButton onClick={handleNavigate} />
    </>
  );
};

ParentForm.propTypes = {
  control: PropTypes.object,
  errors: PropTypes.object,
  handleSubmitData: PropTypes.func,
};

export default ParentForm;

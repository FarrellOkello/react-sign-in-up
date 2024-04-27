import PropTypes from "prop-types";

import { styles } from "./styles";

import { TextInputController } from "components/Inputs/TextInputController";
import { StyledFormButton } from "components/StyledFormButton";
import { StyledButton } from "components/StyledButton";
import { useNavigate } from "react-router-dom";
import { StyledForm } from "components/StyledForm";
import { StyledTextRequired } from "components/StyledTextRequired";
import { FormHeader } from "components/FormHeader";

const AcademicPerformanceForm = (props) => {
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
            name="regNo"
            label="Reg No*"
            defaultValue=""
            error={!!errors.regNo}
            message={errors.regNo?.message ?? ""}
            autoFocus
          />
          <TextInputController
            control={control}
            name="year"
            label="Year*"
            defaultValue=""
            error={!!errors.year}
            message={errors.year?.message ?? ""}
            autoFocus
          />
          <TextInputController
            control={control}
            name="cgpa"
            label="CGPA*"
            defaultValue=""
            error={!!errors.cgpa}
            message={errors.cgpa?.message ?? ""}
            autoFocus
          />
          <TextInputController
            control={control}
            name="pleResult"
            label="PLE Result*"
            defaultValue=""
            error={!!errors.pleResult}
            message={errors.pleResult?.message ?? ""}
            autoFocus
          />
          <TextInputController
            control={control}
            name="uceResult"
            label="UCE Result*"
            defaultValue=""
            error={!!errors.uceResult}
            message={errors.uceResult?.message ?? ""}
            autoFocus
          />
          <TextInputController
            control={control}
            name="uaceResult"
            label="UACE Result*"
            defaultValue=""
            error={!!errors.uaceResult}
            message={errors.uaceResult?.message ?? ""}
            autoFocus
          />
        </div>
        <StyledFormButton onClick={handleSubmitData} text={buttonText} />
      </StyledForm>

      <StyledButton onClick={handleNavigate} />
    </>
  );
};

AcademicPerformanceForm.propTypes = {
  control: PropTypes.object,
  errors: PropTypes.object,
  handleSubmitData: PropTypes.func,
};

export default AcademicPerformanceForm;

import PropTypes from "prop-types";

import { styles } from "./styles";

import { TextInputController } from "components/Inputs/TextInputController";
import { StyledFormButton } from "components/StyledFormButton";
import { StyledButton } from "components/StyledButton";
import { useNavigate } from "react-router-dom";
import { StyledForm } from "components/StyledForm";
import { StyledTextRequired } from "components/StyledTextRequired";
import { FormHeader } from "components/FormHeader";

const StudentForm = (props) => {
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
            name="studentNo"
            label="Student No*"
            defaultValue=""
            error={!!errors.studentNo}
            message={errors.studentNo?.message ?? ""}
            autoFocus
          />
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
            name="course"
            label="Course*"
            defaultValue=""
            error={!!errors.course}
            message={errors.course?.message ?? ""}
            autoFocus
          />
          <TextInputController
            control={control}
            name="homeDistrict"
            label="District*"
            defaultValue=""
            error={!!errors.homeDistrict}
            message={errors.homeDistrict?.message ?? ""}
            autoFocus
          />
          <TextInputController
            control={control}
            name="dob"
            label="DOB*"
            defaultValue=""
            error={!!errors.dob}
            message={errors.dob?.message ?? ""}
            autoFocus
          />
          <TextInputController
            control={control}
            name="telNumber"
            label="Tel No*"
            defaultValue=""
            error={!!errors.telNumber}
            message={errors.telNumber?.message ?? ""}
            autoFocus
          />
          <TextInputController
            control={control}
            name="ninNumber"
            label="NIN*"
            defaultValue=""
            error={!!errors.ninNumber}
            message={errors.ninNumber?.message ?? ""}
            autoFocus
          />
          <TextInputController
            control={control}
            name="contactAddress"
            label="Address*"
            defaultValue=""
            error={!!errors.contactAddress}
            message={errors.contactAddress?.message ?? ""}
            autoFocus
          />
          <TextInputController
            control={control}
            name="sex"
            label="Sex*"
            defaultValue=""
            error={!!errors.sex}
            message={errors.sex?.message ?? ""}
            autoFocus
          />
          <TextInputController
            control={control}
            name="date"
            label="date*"
            defaultValue=""
            error={!!errors.date}
            message={errors.date?.message ?? ""}
            autoFocus
          />
          <TextInputController
            control={control}
            name="yearOfsponsorship"
            label="Year Of Sponsorship*"
            defaultValue=""
            error={!!errors.yearOfsponsorship}
            message={errors.yearOfsponsorship?.message ?? ""}
            autoFocus
          />
          <TextInputController
            control={control}
            name="reason"
            label="Reason*"
            defaultValue=""
            error={!!errors.reason}
            message={errors.reason?.message ?? ""}
            autoFocus
          />
          <TextInputController
            control={control}
            name="whoRecommendedYou"
            label="Recommender*"
            defaultValue=""
            error={!!errors.whoRecommendedYou}
            message={errors.whoRecommendedYou?.message ?? ""}
            autoFocus
          />
          <TextInputController
            control={control}
            name="parentName"
            label="parent Name*"
            defaultValue=""
            error={!!errors.parentName}
            message={errors.parentName?.message ?? ""}
            autoFocus
          />
          <TextInputController
            control={control}
            name="contact"
            label="Parent contact*"
            defaultValue=""
            error={!!errors.contact}
            message={errors.contact?.message ?? ""}
            autoFocus
          />
            <TextInputController
            control={control}
            name="status"
            label="Parent status*"
            defaultValue=""
            error={!!errors.status}
            message={errors.status?.message ?? ""}
            autoFocus
          />
        </div>
        <StyledFormButton onClick={handleSubmitData} text={buttonText} />
      </StyledForm>

      <StyledButton onClick={handleNavigate} />
    </>
  );
};

StudentForm.propTypes = {
  control: PropTypes.object,
  errors: PropTypes.object,
  handleSubmitData: PropTypes.func,
};

export default StudentForm;

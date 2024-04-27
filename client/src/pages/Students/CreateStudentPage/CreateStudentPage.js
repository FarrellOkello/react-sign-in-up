import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

import { validationSchema } from "utilities";
import { usePopupContext } from "context/PopupProvider";
import { useAuthContext } from "context/AuthProvider";
import { useAxiosPrivate } from "customHooks";

import { StyledContainer } from "components/StyledContainer";
import StudentForm from "components/StudentForm/StudentForm";

const CreateStudentPage = () => {
  const endpoint = "/api/students";
  const { openToast } = usePopupContext();
  const { auth } = useAuthContext();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema.createStudent) });

  const sendData = async (data) => {
    const {parentName, contact, status} = data
    const {regNo,
      studentNo,
      name,
      course,
      homeDistrict,
      dob,
      telNumber,
      ninNumber,
      contactAddress,
      sex,
      date,
      yearOfsponsorship,
      reason,
      whoRecommendedYou} = data
      const parentData = {parentName, contact, status}
      const studentData = {regNo,
        studentNo,
        name,
        course,
        homeDistrict,
        dob,
        telNumber,
        ninNumber,
        contactAddress,
        sex,
        date,
        yearOfsponsorship,
        reason,
        whoRecommendedYou}
        console.log(parentData,studentData);
        const newData = { parentData, studentData, roles: auth?.roles };

    try {
      await axiosPrivate.post(`${endpoint}`,  newData);

      navigate(-1);
    } catch (error) {
      openToast(error.response.statusText, "error");
    }
  };

  return (
    <StyledContainer>
      <StudentForm
        avatar={<PersonAddAltOutlinedIcon />}
        heading="add student"
        control={control}
        errors={errors}
        handleSubmitData={handleSubmit(sendData)}
        buttonText="create"
      />
    </StyledContainer>
  );
};

export default CreateStudentPage;

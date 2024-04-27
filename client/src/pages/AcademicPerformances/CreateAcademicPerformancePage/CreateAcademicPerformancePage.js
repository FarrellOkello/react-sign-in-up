import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

import { validationSchema } from "utilities";
import { usePopupContext } from "context/PopupProvider";
import { useAuthContext } from "context/AuthProvider";
import { useAxiosPrivate } from "customHooks";

import { StyledContainer } from "components/StyledContainer";
import AcademicPerformanceForm from "components/AcademicPerformancesForm/AcademicPerformanceForm";

const CreateAcademicPerformancePage = () => {
  const endpoint = "/api/academicperformances";
  const { openToast } = usePopupContext();
  const { auth } = useAuthContext();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema.addAcademicPerformance) });

  const sendData = async (data) => {
    const newData = { ...data, roles: auth?.roles };

    try {
      await axiosPrivate.post(`${endpoint}`, newData);

      navigate(-1);
    } catch (error) {
      openToast(error.response.statusText, "error");
    }
  };

  return (
    <StyledContainer>
      <AcademicPerformanceForm
        avatar={<PersonAddAltOutlinedIcon />}
        heading="add employee"
        control={control}
        errors={errors}
        handleSubmitData={handleSubmit(sendData)}
        buttonText="create"
      />
    </StyledContainer>
  );
};

export default CreateAcademicPerformancePage;

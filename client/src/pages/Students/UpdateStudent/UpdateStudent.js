import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import { validationSchema } from "utilities";
import { useAuthContext } from "context/AuthProvider";
import { usePopupContext } from "context/PopupProvider";
import { useAxiosPrivate, useGetItemData } from "customHooks";

import { StyledContainer } from "components/StyledContainer";
import { EmployeeForm } from "components/EmployeeForm";
import { Loader } from "components/Loader";
import { Error } from "components/Error";
import { StudentForm } from "components/StudentForm";

const UpdateStudent = () => {
  const { id } = useParams();
  const endpoint = "/api/students";
  const { auth } = useAuthContext();
  const { openToast } = usePopupContext();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema.updateStudent) });

  const { itemData: student } = useGetItemData(`${endpoint}/${id}`);

  const defaultValues = {
    regNo: student?.data?.regNo || "",
    studentNo: student?.data?.studentNo || "",
    name: student?.data?.name || "",
    course: student?.data?.course || "",
    homeDistrict: student?.data?.homeDistrict || "",
    dob: student?.data?.dob || "",
    telNumber: student?.data?.telNumber || "",
    ninNumber: student?.data?.ninNumber || "",
    contactAddress: student?.data?.contactAddress || "",
    sex: student?.data?.sex || "",
    date: student?.data?.date || "",
    yearOfsponsorship: student?.data?.yearOfsponsorship || "",
    reason: student?.data?.reason || "",
    whoRecommendedYou: student?.data?.whoRecommendedYou || "",
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValue("regNo", defaultValues.regNo);
      setValue("studentNo", defaultValues.studentNo);
      setValue("name", defaultValues.name);
      setValue("course", defaultValues.course);
      setValue("homeDistrict", defaultValues.homeDistrict);
      setValue("dob", defaultValues.dob);
      setValue("telNumber", defaultValues.telNumber);
      setValue("ninNumber", defaultValues.ninNumber);
      setValue("contactAddress", defaultValues.contactAddress);
      setValue("sex", defaultValues.sex);
      setValue("date", defaultValues.date);
      setValue("yearOfsponsorship", defaultValues.yearOfsponsorship);
      setValue("reason", defaultValues.reason);
      setValue("whoRecommendedYou", defaultValues.whoRecommendedYou);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [
    setValue,
    defaultValues.regNo,
    defaultValues.studentNo,
    defaultValues.name,
    defaultValues.course,
    defaultValues.homeDistrict,
    defaultValues.dob,
    defaultValues.telNumber,
    defaultValues.ninNumber,
    defaultValues.contactAddress,
    defaultValues.sex,
    defaultValues.date,
    defaultValues.yearOfsponsorship,
    defaultValues.reason,
    defaultValues.whoRecommendedYou,
  ]);

  const updateStudentData = async (data) => {
    const newData = { ...data, roles: auth?.roles };

    try {
      await axiosPrivate.put(`${endpoint}/${id}`, newData);
      navigate("/students");
    } catch (error) {
      openToast(error.response.statusText, "error");
    }
  };

  return (
    <StyledContainer>
      {student.status === "loading" ? (
        <Loader text="loading student's data" />
      ) : student.status === "error" ? (
        <Error text="error occurred" />
      ) : (
        <StudentForm
          avatar={<EditOutlinedIcon />}
          heading="update student"
          control={control}
          errors={errors}
          handleSubmitData={handleSubmit(updateStudentData)}
          buttonText="update"
        />
      )}
    </StyledContainer>
  );
};

export default UpdateStudent;

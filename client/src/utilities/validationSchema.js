import * as yup from "yup";

// REGEX
const PASSWORD_REG =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

// validation

const login = yup.object().shape({
  email: yup.string().required("email is required").email(),
  password: yup.string().required("password is required"),
});

const register = yup.object().shape({
  name: yup.string().required("name is required"),
  email: yup.string().required("email is required").email(),
  password: yup
    .string()
    .required("password is required")
    .trim()
    .matches(
      PASSWORD_REG,
      "Has to be minimum 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character"
    ),
  confirmPassword: yup
    .string()
    .required("confirm your password")
    .trim()
    .oneOf([yup.ref("password")], "passwords do not match"),
});

const createEmployee = yup.object({
  name: yup.string().required("name is required"),
  surname: yup.string().required("surname is required"),
});

const updateEmployee = yup.object({
  name: yup.string().required("name is required"),
  surname: yup.string().required("surname is required"),
});

const createStudent = yup.object({
    regNo: yup.string().required("Reg No. is required"),
    studentNo: yup.string().required("student No. is required"),
    name: yup.string().required("name is required"),
    course: yup.string().required("course is required"),
    homeDistrict: yup.string().required("district is required"),
    dob: yup.string().required("dob is required"),
    telNumber: yup.string().required("Tel No. is required"),
    ninNumber: yup.string().required("NIN is required"),
    contactAddress: yup.string().required("Address is required"),
    sex: yup.string().required("sex is required"),
    date: yup.string().required("date is required"),
    yearOfsponsorship: yup.string().required("Year of Sponsorship is required"),
    reason: yup.string().required("reason is required"),
    whoRecommendedYou: yup.string().required("Recomender is required"),
});

const updateStudent = yup.object({
  regNo: yup.string().required("Reg No. is required"),
  studentNo: yup.string().required("student No. is required"),
  name: yup.string().required("name is required"),
  course: yup.string().required("course is required"),
  homeDistrict: yup.string().required("district is required"),
  dob: yup.string().required("dob is required"),
  telNumber: yup.string().required("Tel No. is required"),
  ninNumber: yup.string().required("NIN is required"),
  contactAddress: yup.string().required("Address is required"),
  sex: yup.string().required("sex is required"),
  date: yup.string().required("date is required"),
  yearOfsponsorship: yup.string().required("Year of Sponsorship is required"),
  reason: yup.string().required("reason is required"),
  whoRecommendedYou: yup.string().required("Recomender is required"),
});

const addParent = yup.object({
  parentName: yup.string().required("Parent or Gardian name is required"),
  contact: yup.string().required("contact is required"),
  status: yup.string().required("status is required"),
});

const addAcademicPerformance = yup.object({
  regNo: yup.string().required("Reg No is required"),
  year: yup.string().required("year is required"),
  cgpa: yup.string().required("cgpa is required"),
  pleResult: yup.string().required("ple Result is required"),
  uceResult: yup.string().required("uce Result is required"),
  uaceResult: yup.string().required("uace Result is required"),
});

const validationSchema = {
  login,
  register,
  createEmployee,
  updateEmployee,
  createStudent,
  updateStudent,
  addParent,
  addAcademicPerformance
};

export default validationSchema;

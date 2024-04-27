import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { AiOutlineUserAdd } from "react-icons/ai";

import { styles, useStyles } from "./styles";
import { usePopupContext } from "context/PopupProvider";
import { useAuthContext } from "context/AuthProvider";
import { useAxiosPrivate, useGetData } from "customHooks";

import { StyledContainer } from "components/StyledContainer";
import { StyledHeading } from "components/StyledHeading";
import { StyledButton } from "components/StyledButton";
import { Loader } from "components/Loader";
import { Error } from "components/Error";
import { StudentsTable } from "components/StudentsTable";

const StudentsDataPage = () => {
  const endpoint = "/api/students";
  const { auth } = useAuthContext();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const classes = useStyles();
  const { openToast, openConfirmationModal } = usePopupContext();

  const { data: students, setData: setStudents } = useGetData(endpoint);

  const removeStudentHandler = (id) => {
    const removeItemCallback = async () => {
      try {
        await axiosPrivate.delete(`${endpoint}/${id}`, {
          data: { roles: auth?.roles },
        });

        const filteredList = students.data.filter((item) => item._id !== id);

        setStudents((prevState) => ({ ...prevState, data: filteredList }));
      } catch (error) {
        openToast(error.response.statusText, "error");
      }
    };

    const config = {
      title: "Remove an student",
      question: "Are you sure you want to remove an student?",
      action: removeItemCallback,
    };

    openConfirmationModal(config);
  };

  const handleNavigate = () => navigate(-1);
  const handleOnClick = () => navigate("/create-student");

  return (
    <StyledContainer>
      <StyledHeading text="Students List" />
      {/* <p>
        Below are <strong style={{ color: "darkgreen" }}>students</strong> data
        imported from MongoDB data base. You can basically create new student,
        update data or remove them from the server.
      </p> */}

      <div style={styles.tableContent}>
        {students.status === "loading" ? (
          <Loader text="loading list" />
        ) : students.status === "error" ? (
          <Error text="error occurred" />
        ) : students.status === "success" && students.data.length ? (
          <StudentsTable
          studentsData={students.data}
            onRemove={removeStudentHandler}
          />
        ) : (
          <p style={styles.informationText}>
            List is empty - please add a new student
          </p>
        )}
        <Button
          variant="outlined"
          className={classes.button}
          onClick={handleOnClick}
        >
          <AiOutlineUserAdd style={styles.linkIcon} />
          add student
        </Button>
      </div>

      <StyledButton onClick={handleNavigate} />
    </StyledContainer>
  );
};

export default StudentsDataPage;

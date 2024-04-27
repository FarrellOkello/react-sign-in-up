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
import AcademicPerformancesTable from "components/AcademicPerformancesTable/AcademicPerformamcestable";

const AcademicPerformancesDataPage = () => {
  const endpoint = "/api/academicperformances";
  const { auth } = useAuthContext();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const classes = useStyles();
  const { openToast, openConfirmationModal } = usePopupContext();

  const { data: academicperformances, setData: setAcademicPerformances } = useGetData(endpoint);

  const removeAcademicPerformanceHandler = (id) => {
    const removeItemCallback = async () => {
      try {
        await axiosPrivate.delete(`${endpoint}/${id}`, {
          data: { roles: auth?.roles },
        });

        const filteredList = academicperformances.data.filter((item) => item._id !== id);

        setAcademicPerformances((prevState) => ({ ...prevState, data: filteredList }));
      } catch (error) {
        openToast(error.response.statusText, "error");
      }
    };

    const config = {
      title: "Remove an academic performance",
      question: "Are you sure you want to remove an academic performance?",
      action: removeItemCallback,
    };

    openConfirmationModal(config);
  };

  const handleNavigate = () => navigate(-1);
  const handleOnClick = () => navigate("/create-academicperformance");

  return (
    <StyledContainer>
      <StyledHeading text="Academic Performances List" />
      
      <div style={styles.tableContent}>
        {academicperformances.status === "loading" ? (
          <Loader text="loading list" />
        ) : academicperformances.status === "error" ? (
          <Error text="error occurred" />
        ) : academicperformances.status === "success" && academicperformances.data.length ? (
          <AcademicPerformancesTable
            academicperformancesData={academicperformances.data}
            onRemove={removeAcademicPerformanceHandler}
          />
        ) : (
          <p style={styles.informationText}>
            List is empty - please add a new academic performances
          </p>
        )}
        <Button
          variant="outlined"
          className={classes.button}
          onClick={handleOnClick}
        >
          <AiOutlineUserAdd style={styles.linkIcon} />
          add academic performances
        </Button>
      </div>

      <StyledButton onClick={handleNavigate} />
    </StyledContainer>
  );
};

export default AcademicPerformancesDataPage;

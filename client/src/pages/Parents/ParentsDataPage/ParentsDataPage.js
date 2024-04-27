import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { AiOutlineUserAdd } from "react-icons/ai";

import { styles, useStyles } from "./styles";
import { usePopupContext } from "context/PopupProvider";
import { useAuthContext } from "context/AuthProvider";
import { useAxiosPrivate, useGetData } from "customHooks";

import { StyledContainer } from "components/StyledContainer";
import { StyledHeading } from "components/StyledHeading";
import { EmployeesTable } from "components/EmployeesTable";
import { StyledButton } from "components/StyledButton";
import { Loader } from "components/Loader";
import { Error } from "components/Error";
import { ParentsTable } from "components/ParentTable";

const ParentsDataPage = () => {
  const endpoint = "/api/parents";
  const { auth } = useAuthContext();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const classes = useStyles();
  const { openToast, openConfirmationModal } = usePopupContext();

  const { data: parents, setData: setParents } = useGetData(endpoint);

  const removeParentHandler = (id) => {
    const removeItemCallback = async () => {
      try {
        await axiosPrivate.delete(`${endpoint}/${id}`, {
          data: { roles: auth?.roles },
        });

        const filteredList = parents.data.filter((item) => item._id !== id);

        setParents((prevState) => ({ ...prevState, data: filteredList }));
      } catch (error) {
        openToast(error.response.statusText, "error");
      }
    };

    const config = {
      title: "Remove an parent",
      question: "Are you sure you want to remove an parent?",
      action: removeItemCallback,
    };

    openConfirmationModal(config);
  };

  const handleNavigate = () => navigate(-1);
  const handleOnClick = () => navigate("/create-parent");

  return (
    <StyledContainer>
      <StyledHeading text="Parents List" />
      
      <div style={styles.tableContent}>
        {setParents.status === "loading" ? (
          <Loader text="loading list" />
        ) : setParents.status === "error" ? (
          <Error text="error occurred" />
        ) : setParents.status === "success" && setParents.data.length ? (
          <ParentsTable
            parentsData={parents.data}
            onRemove={removeParentHandler}
          />
        ) : (
          <p style={styles.informationText}>
            List is empty - please add a new parent
          </p>
        )}
        <Button
          variant="outlined"
          className={classes.button}
          onClick={handleOnClick}
        >
          <AiOutlineUserAdd style={styles.linkIcon} />
          add parent
        </Button>
      </div>

      <StyledButton onClick={handleNavigate} />
    </StyledContainer>
  );
};

export default ParentsDataPage;

import { useNavigate } from "react-router-dom";

import { styles } from "./styles";
import { usePopupContext } from "context/PopupProvider";
import { useAuthContext } from "context/AuthProvider";
import { useAxiosPrivate, useGetData } from "customHooks";

import { StyledButton } from "components/StyledButton";
import { SubscribersTable } from "components/SubscribersTable";
import { Loader } from "components/Loader";
import { Error } from "components/Error";
import { StyledContainer } from "components/StyledContainer";
import { StyledHeading } from "components/StyledHeading";

const SubscribersDataPage = () => {
  const endpoint = "/api/subscribers";
  const { auth } = useAuthContext();
  const axiosPrivate = useAxiosPrivate();
  const { openToast, openConfirmationModal } = usePopupContext();

  const navigate = useNavigate();

  const { data: subscribers, setData: setSubscribers } = useGetData(endpoint);

  const removeSubscriberHandler = (id) => {
    const { REACT_APP_SECRET_USER_ID } = process.env;

    if (id === REACT_APP_SECRET_USER_ID) {
      openToast("You can not remove this data", "error");
      return;
    }

    const removeItemCallback = async () => {
      try {
        await axiosPrivate.delete(`${endpoint}/${id}`, {
          data: { roles: auth?.roles },
        });
        const filteredList = subscribers.data.filter((item) => item._id !== id);
        setSubscribers((prevState) => ({ ...prevState, data: filteredList }));
      } catch (error) {
        openToast(error.message, "error");
      }
    };

    const config = {
      title: "Remove a subscriber",
      question: "Are you sure you want to remove a subscriber?",
      action: removeItemCallback,
    };

    openConfirmationModal(config);
  };

  function checkUserId(id) {
    const { REACT_APP_SECRET_USER_ID } = process.env;

    if (id === REACT_APP_SECRET_USER_ID) {
      openToast("Sorry, can not update this data", "error");
      return;
    }

    navigate(`/update-subscriber/${id}`);
  }

  const handleNavigate = () => navigate(-1);

  return (
    <StyledContainer>
      <StyledHeading text="Subscribers List" /> 

      <div style={styles.tableContent}>
        {subscribers.status === "loading" ? (
          <Loader text="loading list" />
        ) : subscribers.status === "error" ? (
          <Error text="error occurred" />
        ) : subscribers.status === "success" && subscribers.data.length ? (
          <SubscribersTable
            subscribersData={subscribers.data}
            onRemove={removeSubscriberHandler}
            checkUserId={checkUserId}
          />
        ) : (
          <p style={styles.informationText}>
            List is empty - please add a new subscriber
          </p>
        )}
      </div>

      <StyledButton onClick={handleNavigate} />
    </StyledContainer>
  );
};

export default SubscribersDataPage;

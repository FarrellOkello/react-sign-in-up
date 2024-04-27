import { StyledContainer } from "components/StyledContainer";
import { StyledHeading } from "components/StyledHeading";
import { useAuthContext } from "context/AuthProvider";

const SecuredContentPage = () => {
  const { auth } = useAuthContext();

  return (
    <StyledContainer>
      <StyledHeading text="Welcome" name={auth?.name} />

      <p>
        You are an {auth?.name}
      </p>
    </StyledContainer>
  );
};

export default SecuredContentPage;

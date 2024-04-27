import { useNavigate } from "react-router-dom";

import { StyledContainer } from "components/StyledContainer";
import { StyledHeading } from "components/StyledHeading";
import { StyledButton } from "components/StyledButton";

const CoursesPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(-1);

  return (
    <StyledContainer>
      <StyledHeading text="Universities & Courses available" />

      <p>
        A table of Universities like no other .
      </p>

      <StyledButton onClick={handleNavigate} />
    </StyledContainer>
  );
};

export default CoursesPage;

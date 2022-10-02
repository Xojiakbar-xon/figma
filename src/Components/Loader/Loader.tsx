import * as React from "react";

// 
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <StyledLoading>
      <CircularProgress />
    </StyledLoading>
  );
}

const StyledLoading = styled.div`
  margin-top: 100px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

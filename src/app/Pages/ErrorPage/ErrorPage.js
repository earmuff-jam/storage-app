import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div id="error-page">
      <H1>Oops!</H1>
      <P>Sorry, unexpected error has occurred.</P>
      <P>
        <i>{error.statusText || error.message}</i>
      </P>
    </div>
  );
};

export const H1 = styled("h1")({
  color: "#333333",
  fontFamily: "Bitter, serif",
  fontSize: "50px",
  fontWeight: "normal",
  lineHeight: "54px",
  margin: "0 0 24px",
});

export const P = styled("p")({
  color: "#333333",
  fontFamily: "Georgia, serif",
  fontSize: "18px",
  lineHeight: "28px",
  margin: "0 0 16px",
});

export default ErrorPage;

import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "react-router-dom";

function getErrorMessage(error: unknown): string {
  let msg: string;

  if (isRouteErrorResponse(error)) {
    msg = `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    msg = error.message;
  } else if (typeof error === "string") {
    msg = error;
  } else {
    console.error(error);
    msg = "Unknown error";
  }

  return msg;
}

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  function navigateBack() {
    navigate(-1);
  }

  return (
    <div className="error-page-container">
      <h1>Oops!</h1>

      <p>Sorry, an unexpected error has occurred</p>
      <p className="global-error-message">
        <i>{getErrorMessage(error)}</i>
      </p>

      <button type="button" onClick={navigateBack}>
        Go Back
      </button>
    </div>
  );
}

export default ErrorPage;

const ServerError = ({ error }) => {
  if (isErrorExist(error)) {
    const errors = error.data.errors;
    if (Array.isArray(errors) && errors.length > 0) {
      return (
        <div style={{ color: "red" }} className="p-2">
          {error.data.errors.map((err) => (
            <p key={err}>{err}</p>
          ))}
        </div>
      );
    }

    return (
      <p style={{ color: "tomato", marginBottom: "25px" }}>{error.data.message}</p>
    );
  } else {
    return null;
  }
};

export default ServerError;

function isErrorExist(error) {
  return error && error.data;
}

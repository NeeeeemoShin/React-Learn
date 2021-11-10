import classes from "./CssModules.modules.scss";

const containerStyle = {
  border: "solid 2px #392eff",
  borderRadius: "20px",
  padding: "8px",
  margin: "8px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};

export const CssModules = () => {
  return (
    <>
      <div style={containerStyle}>
        <p>- CSS Modules -</p>
        <button>FIGHT!!</button>
      </div>
      <div className={classes.container}>
        <p>- CSS Modules -</p>
        <button>FIGHT!!</button>
      </div>
    </>
  );
};

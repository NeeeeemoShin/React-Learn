import classes from "./CssModules.modules.scss";

export const CssModules = () => {
  return (
    <>
      <div className={classes.container}>
        <p>- CSS Modules -</p>
        <button>FIGHT!!</button>
      </div>
    </>
  );
};

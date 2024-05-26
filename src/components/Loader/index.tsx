import { FaSpinner } from "react-icons/fa6";
import classes from "./loader.module.css";

export function Loader() {
  return (
    <>
      <FaSpinner className={classes.loader} />
    </>
  );
}

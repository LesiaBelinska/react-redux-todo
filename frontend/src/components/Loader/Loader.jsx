import { TailSpin } from "react-loader-spinner";

import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <TailSpin
        height="100"
        width="100"
        color="#ff6b6b"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;

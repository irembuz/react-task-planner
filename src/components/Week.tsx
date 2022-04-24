import React, { FunctionComponent, useContext, useEffect } from "react";
import MonthDay from "./MonthDay";

import GlobalContext from "../context/GlobalContext";

const Week: FunctionComponent<any> = ({ month }) => {
  const { pathName, setPathName } = useContext(GlobalContext);

  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);

  return (
    <div className="flex-1 grid grid-cols-7">
      <React.Fragment>
        {month[4].map((day: any, idx: any) => (
          <MonthDay day={day} key={idx} rowIdx={0} />
        ))}
      </React.Fragment>
    </div>
  );
};

export default Week;

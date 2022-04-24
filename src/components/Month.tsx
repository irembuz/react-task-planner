import React, { FunctionComponent, useContext, useEffect } from "react";
import MonthDay from "./MonthDay";

import GlobalContext from "../context/GlobalContext";

const Month: FunctionComponent<any> = ({ month }) => {
  const { pathName, setPathName } = useContext(GlobalContext);

  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row: any, i: any) => (
        <React.Fragment key={i}>
          {row.map((day: any, idx: any) => (
            <MonthDay day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Month;

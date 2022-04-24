import React, { FunctionComponent } from "react";
import MonthDay from "./MonthDay";
const Month: FunctionComponent<any> = ({ month }) => {
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

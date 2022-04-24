import React, { FunctionComponent } from "react";
import MonthDay from "./MonthDay";

const Week: FunctionComponent<any> = ({ month }) => {
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

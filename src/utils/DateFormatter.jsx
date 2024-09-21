import React from "react";
import Moment from "react-moment";

export const DateFormatter = ({ date }) => {
  return (
    <>
      <Moment format="D MMM YYYY" withTitle>
        {date}
      </Moment>
    </>
  );
};

/* import React from "react";

export const DateFormatter = ({ date }) => {
  const apiDateString = date;
  const dateObject = new Date(apiDateString);
  const readableDate = dateObject.toLocaleString();

  return <>{readableDate}</>;
};
 */

export const CleanDate = (date) => {
  const isoDateTime = date;
  const dateObject = new Date(isoDateTime);

  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = dateObject.toLocaleDateString("en-US", options);

  //   const formattedTime = dateObject.toLocaleTimeString("en-US");

  //   return (
  //     <div>
  //       <p>Date: {formattedDate}</p>
  //       <p>Time: {formattedTime}</p>
  //     </div>
  //   );

  return formattedDate;
};

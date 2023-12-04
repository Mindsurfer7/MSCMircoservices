import React, { ReactNode, Suspense } from "react";

// const LinkWrapper = React.lazy(() =>
//   import("entryhost/LinkWrapper").catch((e) => {
//     console.log(e);
//     return { default: () => <>Component Unavailable!</> };
//   })
// );

interface TrackerProps {
  Component?: React.FC;
}
const Tracker: React.FC<TrackerProps> = ({}) => {
  return <div className={""}>TRACKER</div>;
};

export default Tracker;

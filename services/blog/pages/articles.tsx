import React from "react";
import cls from "./Page.module.scss";

import dynamic from "next/dynamic";
//@ts-ignore
const Clone = dynamic(() => import("clone/clonedArt"), { ssr: false });

// const ReactApp = dynamic(
//   () =>
//     //@ts-ignore
//     import("tracker/TrackerComponent").catch((e) => {
//       console.log(e);

//       return { default: () => <>Component unavailable!</> };
//     }),
//   { ssr: false }
// );
const Full = dynamic(
  () =>
    //@ts-ignore
    import("tracker/ReactApp").catch((e) => {
      console.log(e);

      return { default: () => <>Component unavailable!</> };
    }),
  { ssr: false }
);

export default function Articles() {
  return (
    <div className={cls.main}>
      Articles page
      <Clone />
      react seems to be there
      {/* <ReactApp /> */}
      <Full />
    </div>
  );
}

// <div className={cls.main}>
// Articles page
// <Link href={"/remote"}>Remote</Link>
// </div>

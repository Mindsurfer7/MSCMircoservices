import React from "react";
import cls from "./Page.module.scss";
import LinkWrapper from "../components/LinkWrapper";
import dynamic from "next/dynamic";
//@ts-ignore next app here
const Clone = dynamic(() => import("clone/clonedArt"), { ssr: false });

//react app here
const ReactApp = dynamic(
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
    <div className={cls.x}>
      <div className={cls.react}>
        <ReactApp />
      </div>
      <div className={cls.clone}>
        <Clone />
      </div>
    </div>
  );
}

// const FC = dynamic(
//   () =>
//     import("tracker/TrackerComponent").catch((e) => {
//       console.log(e);
//       return { default: () => <>Component unavailable!</> };
//     }),
//   { ssr: false }
// );

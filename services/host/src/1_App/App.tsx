import Tracker from "@/2_pages/tracker/Tracker";
import { log } from "console";
import React, { lazy, Suspense, useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import cls from "./App.module.scss";
interface AppProps {}

// const NextApp = lazy(
//   () =>
//     // @ts-ignore
//     import("next-remote/MainPage")
// );
const NextClone = lazy(
  () =>
    // @ts-ignore
    await import("clone/clonedArt")
);

console.log(NextClone);

const App: React.FC<AppProps> = ({}) => {
  // const [NextApp, setNextApp] = useState<React.ComponentType<any> | null>(null);
  // const [NextClone, setNextClone] = useState<React.ComponentType<any> | null>(
  //   null
  // );

  useEffect(() => {
    const loadComponents = async () => {
      try {
        // const NextApp = lazy(() =>
        //   //@ts-ignore
        //   import("next-remote/MainPage").catch((e) => {
        //     console.log("next-remote", e);
        //     return {
        //       default: () => <h1>Error requesting next clone remote</h1>,
        //     };
        //   })
        // );
        // const NextClone = lazy(() =>
        //   //@ts-ignore
        //   import("clone/clonedArt").catch((e) => {
        //     console.log("clone", e);
        //     return {
        //       default: () => <h1>Error requesting next clone remote</h1>,
        //     };
        //   })
        // )
        //@ts-ignore
        // const nextAppModule = await import("next-remote/MainPage");
        // //@ts-ignore
        // const nextCloneModule = await import("clone/clonedArt");
        // const nextAppComponent = nextAppModule.default;
        // const nextCloneComponent = nextCloneModule.default;
        // // Устанавливаем компоненты в состояние
        // setNextApp(() => nextAppComponent);
        // setNextClone(() => nextCloneComponent);
        // setNextApp(() => NextApp);
        // setNextClone(() => NextClone);
      } catch (error) {
        console.error("Error loading components:", error);
      }
    };

    // Вызываем функцию загрузки компонентов
    loadComponents();
  }, []);

  // //@ts-ignore
  // const NextClone2 = lazy(() => import("next-remote/MainPage"));

  return (
    <div className={cls.block}>
      <h1>REACT HOST APP</h1>
      <Suspense fallback="Loading...">
        {/* {NextApp && <NextApp />} */}
        {NextClone && <NextClone />}
        {/* <NextApp /> */}
        <NextClone />

        {/* <NextClone2 /> */}
      </Suspense>
      <button className={cls.button}>hey! button</button>
      <Outlet />
    </div>
  );
};

export default App;

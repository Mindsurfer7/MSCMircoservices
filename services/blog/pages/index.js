import Articles from "./articles";
import LinkWrapper from "../components/LinkWrapper";
import cls from "./Page.module.scss";
import { Link } from "next/link";

export default function Home() {
  return (
    <div className={cls.home}>
      <div className={cls.title}>Микрофронтенды в монорепозитории</div>
      <div className={cls.text}>
        Монорепозиторий включает в себя три основных сервиса: host-next-app,
        remote-react-app, remote-next-app. В host-next-app находится
        хост-приложение, построенное с использованием Next.js. Это приложение
        содержит страницы, включая index.js для домашней страницы. В файле
        next.config.js настроена поддержка модульной федерации, позволяя
        взаимодействовать с удаленным React & Next приложениями. Также отдельным
        пакетом идет настройка webpack, которую можно шейрить любому новому
        сервису на реакте,что позволяет развернуть новое приложение со всеми
        настройками модульного scss и typescript в считанные минуты
      </div>
      <div className={cls.text}>
        Пакет remote-react-app представляет собой удаленное React-приложение,
        экспортирующее компонент HomePage. Файл remoteEntry.js содержит
        информацию о модульной федерации для возможности удаленного импорта
        компонента хост-приложением. Вместе эти три пакета создают
        интегрированное приложение, где домашняя страница находится в удаленном
        React-приложении, интегрированном в Next.js хост-приложение с
        использованием модульной федерации.
      </div>
      <Articles />
    </div>
  );
}

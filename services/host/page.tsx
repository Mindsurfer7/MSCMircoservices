import Link from "next/link";
import styles from "./page.module.css";

//////////////////////////////////////////////////////////////////////////////

///////////////////////////  "moduleResolution": "node", ///////////////////////

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href={"/articles"}>Blog</Link>
    </main>
  );
}

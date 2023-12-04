import Articles from "./articles";

import { Link } from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Homepage of HOST NEXT app</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
        impedit suscipit architecto, odio inventore nostrum non neque dicta.
        Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem
        nobis odit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
        impedit suscipit architecto, odio inventore nostrum non neque dicta.
        Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem
        nobis odit.
      </p>
      {/* <Link href={"/articles"}>Remote</Link> */}
      <Articles />
    </div>
  );
}

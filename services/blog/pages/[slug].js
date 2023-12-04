import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const SlugPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const RemoteApp = dynamic(() => import(`clone/${slug}`), {
    ssr: false,
  });

  return (
    <div>
      <RemoteApp />
    </div>
  );
};

export default SlugPage;

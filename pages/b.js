import Link from "next/link";

const bPage = props => {

  return (
    <div>
      <h1>Dynamic page</h1>
      <p>Using something like {process.env.FANCY}</p>
      <Link href="/a">
        <a>Go to static page</a>
      </Link>
    </div>
  );
};

bPage.getInitialProps = async () => {
  console.log("b: getInitial props is running");
  return {
    name: "Johnny"
  };
};

export default bPage;

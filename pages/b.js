import Link from "next/link";

const bPage = props => {

  return (
    <div>
      <h1>I am a dynamic page</h1>
      <p>Process.env.FANCY: {process.env.FANCY}</p>
      <p>Process.env.SOME_NUMBER: {process.env.SOME_NUMBER}</p>
      <p>Process.env.NODE_ENV: {process.env.NODE_ENV}</p>
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

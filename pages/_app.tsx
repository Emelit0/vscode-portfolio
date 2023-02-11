import Layout from "../components/Layout";
import MetaHead from "../components/Head";
import "../styles/global.css";

const App = ({ Component, pageProps }: any) => {
  return (
    <Layout>
      <MetaHead title={`Kevin Stoll | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;

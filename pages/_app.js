import { Provider } from "react-redux";
import { store } from "../redux/store";

import "../styles/tailwind.output.css";
import "../styles/common.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;

import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";



const Providers = ({ children }) => {
  return (
    <Router>
      <Provider store={store}>{children}</Provider>
    </Router>
  );
};

const customRender = (component) => {
  return render(component, {
    wrapper: Providers,
  });
};

export * from "@testing-library/react";
export { customRender as Render };

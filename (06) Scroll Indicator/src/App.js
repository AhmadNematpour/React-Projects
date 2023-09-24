import { Fragment } from "react/cjs/react.production.min";
import Content from "./components/Content";
import ScrollIndicatore from "./components/ScrollIndicatore";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <ul>
            <li>خانه</li>
            <li>تماس با ما</li>
            <li>درباره ما</li>
            <li>بلاگ</li>
          </ul>  
        </div>  
      </header>  
      <ScrollIndicatore />
      <Content />
    </>
  );
}

export default App;

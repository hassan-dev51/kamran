import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import ContentLoader from "react-content-loader";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = React.lazy(() => import("./App"));
const root = ReactDOM.createRoot(document.getElementById("root"));
const Loader = () => (
  <ContentLoader
    height="400"
    width="350"
    speed={1.5}
    backgroundColor="tomato"
    foregroundColor="yellow"
    viewBox="0 0 265 230"
    className="md:w-full md:h-[900px]"
  >
    <rect x="15" y="15" rx="4" ry="4" width="350" height="25" />
    <rect x="15" y="50" rx="2" ry="2" width="350" height="150" />
    <rect x="15" y="230" rx="2" ry="2" width="170" height="20" />
    <rect x="60" y="230" rx="2" ry="2" width="170" height="20" />
  </ContentLoader>
);

root.render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>
);

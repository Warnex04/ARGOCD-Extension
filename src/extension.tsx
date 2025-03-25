import React from "react";
import ReactDOM from "react-dom";
import ResourceExtension from "./ResourceExtension";

((window: any) => {
  window?.extensionsAPI?.registerResourceExtension(
    ResourceExtension,
    "*", // Namespace
    "Fleet", // Resource Kind
    "Fleet Health", // Tab Name
    { icon: "fa fa-chart-line" } // Tab Icon
  );
})(window);
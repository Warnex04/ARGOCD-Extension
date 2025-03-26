import * as React from "react";
import { useEffect, useState } from "react";

export const Extension = (props: any) => {

  const loc = window.location;
  const { resource, application } = props;
  const application_name = application?.metadata?.name || "";

  return(
    // Placeholder text
    <React.Fragment>
      <h1>Health Status</h1>
      <p>Application: {application_name}</p>
      <p>Progressing Devices: {resource?.status?.progressingDevices}</p>
      <p>Updated Devices: {resource?.status?.updatedDevices}</p>
    </React.Fragment>
  );
};

export const component = Extension;

// Register the component extension in ArgoCD
((window: any) => {
  window?.extensionsAPI?.registerResourceExtension(
    component,
    "*",
    "Fleet",
    "Health Status",
    { icon: "fa fa-chart-area" }
  );
})(window);

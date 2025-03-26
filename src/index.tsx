import * as React from "react";
import PieChartTab from "./tabs/PieChartTab";
import { useEffect, useState } from "react";

export const Extension = (props: any) => {
  const { resource, application } = props;
  const application_name = application?.metadata?.name || "";
  const progressingDevices = resource?.status?.progressingDevices || 0;
  const updatedDevices = resource?.status?.updatedDevices || 0;

  return (
    <React.Fragment>
      <h1>Health Status</h1>
      <p>Application: {application_name}</p>
      <p>Progressing Devices: {progressingDevices}</p>
      <p>Updated Devices: {updatedDevices}</p>
      <PieChartTab progressingDevices={progressingDevices} updatedDevices={updatedDevices} />
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

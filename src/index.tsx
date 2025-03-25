import * as React from "react";
import { useEffect, useState } from "react";


export const Extension = (props: any) => {
  const [events, setEvents] = useState([]);
  const [duration, setDuration] = useState("1h");

  const loc = window.location;
  const { resource, application } = props;
  const application_name = application?.metadata?.name || "";

  const updateDuration = (e: any, dur: string) => {
    e.preventDefault();
    setDuration(dur);
  };
  useEffect(() => {
    let url = `/api/v1/applications/${application_name}/events?resourceUID=${resource.metadata.uid}&resourceNamespace=${resource.metadata.namespace}&resourceName=${resource.metadata.name}&duration=${duration}`;
    if (resource.kind === "Application") {
      url = `/api/v1/applications/${application_name}/events`;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setEvents(data?.items || []);
      })
      .catch(err => {
        console.error("res.data", err);
      });
  }, [application_name, resource, duration]);

  return
};

export const component = Extension;

// Register the component extension in ArgoCD
((window: any) => {
  window?.extensionsAPI?.registerResourceExtension(
    component,
    "*",
    "Rollout",
    "Metrics",
    { icon: "fa fa-chart-area" }
  );
  window?.extensionsAPI?.registerResourceExtension(component, '*', 'Fleet', 'Health Status', { icon: "fa fa-chart-area" });
})(window);
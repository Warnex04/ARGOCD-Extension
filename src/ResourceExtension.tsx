import React, { useEffect, useState } from "react";
import { getResourceStatus } from "./api";
import ResourceChart from "./ResourceChart";

const ResourceExtension = ({ application, resource }: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getResourceStatus({
      applicationName: application.metadata.name,
      applicationNamespace: application.metadata.namespace,
      resourceType: resource.kind,
      resourceName: resource.metadata.name,
    }).then((status) => {
      const chartData = status.conditions.map((condition: any) => ({
        timestamp: condition.lastTransitionTime,
        value: condition.status,
      }));
      setData(chartData);
    });
  }, [application, resource]);

  return <ResourceChart data={data} />;
};

export default ResourceExtension;
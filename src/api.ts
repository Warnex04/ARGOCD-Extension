export function getResourceStatus({
    applicationName,
    applicationNamespace,
    resourceType,
    resourceName,
  }: {
    applicationName: string;
    applicationNamespace: string;
    resourceType: string;
    resourceName: string;
  }) {
    const url = `/api/v1/applications/${applicationName}/resources/${resourceType}/${resourceName}`;
    return fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
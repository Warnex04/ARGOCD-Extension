import React, { useEffect, useState } from 'react';
import { ResourceTabProps } from 'argo-ui';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; // Ensure compatibility with Chart.js auto-registration

export const PieChartTab: React.FC<ResourceTabProps> = ({ resource }) => {
    const [chartData, setChartData] = useState<any>(null);

    useEffect(() => {
        const extractData = () => {
            try {
                const liveManifest = resource?.status?.liveState;
                if (!liveManifest) {
                    console.error('Live manifest not found');
                    return;
                }

                const data = {
                    'Category A': liveManifest.spec?.categoryA || 0,
                    'Category B': liveManifest.spec?.categoryB || 0,
                    'Category C': liveManifest.spec?.categoryC || 0,
                };

                setChartData({
                    labels: Object.keys(data),
                    datasets: [
                        {
                            data: Object.values(data),
                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                        },
                    ],
                });
            } catch (error) {
                console.error('Error extracting data from live manifest:', error);
            }
        };

        extractData();
    }, [resource]);

    if (!chartData) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <Pie data={chartData} />
        </div>
    );
};

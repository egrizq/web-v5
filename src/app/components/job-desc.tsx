const jobDesc = () => {
    const desc: string[] = [
        "Implementation of measuring instruments and testing such as dial gauges, pressure gauges, weighing scales, and calipers to ensure accuracy within ±0.5% tolerance",
        "Successfully achieved an average target of 90% on schedule",
        "Calibrated over 1,000 instruments annually; >15 portable measuring instruments and >54 machines per day",
        "Repair and develop damages measuring instruments, minimizing downtime and ensuring production efficiency",
        "Daily report and documentation calibration, maintenance, and activities"
    ]

    return (
        <ul>
            {desc.map((value, index) => (
                <li className="list-disc" key={index}>{value}</li>
            ))}
        </ul>
    )
}

export default jobDesc
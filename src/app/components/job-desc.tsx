const jobDesc = () => {
    const desc: string[] = [
        "Implementation of measuring instruments and testing such as dial gauges, pressure gauges, weighing scales, and calipers to ensure accuracy within ±0.5% tolerance.",
        "Led and increased team performance by enforcing detail inspections and quality standards, eliminated root causes, resulting in achievement of over 95% quality targets.",
        "Calibrated over 1,000 instruments annually; >15 portable measuring instruments and >54 machines per day.",
        "Coordinated production schedules across multiple divisions guaranteed on-time and high-quality delivery, exceeding user satisfaction expectations.",
        "Proactively Identified quality and production issues, preventing delays and minimizing production downtime, resulting smooth production flow and maximized output."
    ]

    return (
        <ul className="space-y-1">
            {desc.map((value, index) => (
                <li className="list-disc" key={index}>{value}</li>
            ))}
        </ul>
    )
}

export default jobDesc
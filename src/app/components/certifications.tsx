const ServiceSertifications: React.FC<{data: string[][]}> = ({data}) => {
    return (
        <>
            <ul>
                {data.map((value, index) => 
                    <li key={index} className="list-disc"><a href={value[1]} className="hover:text-blue-700">
                        {value[0]}
                    </a></li>
                )}
            </ul>
        </>
    )
}

const Learning: React.FC<{name: string}> = ({name}) => {
    return (
        <span className="flex font-semibold text-xl">
            {name}
        </span>
    )
}

const Path: React.FC<{name: string}> = ({name}) => {
    return (
        <span className="flex">
            {name}
        </span>
    )
}


const dsCertifications = () => {
    const data: string[][] = [
        ["Belajar Pengembangan Machine Learning", "https://www.dicoding.com/certificates/EYX40971OPDL"],
        ["Belajar Machine Learning dengan Python", "https://www.dicoding.com/certificates/JMZV1DDJ3XN9"],
        ["Belajar Analysis Data Science", "https://www.dicoding.com/certificates/N9ZO56O2DPG5"],
        ["Memulai Pemrograman dengan Python", "https://www.dicoding.com/certificates/98XWVRED0PM3"],
        ["Belajar Dasar Data Science", "https://www.dicoding.com/certificates/98XWVRKELPM3"],
        ["Belajar Struktur Query Language (SQL)", "https://www.dicoding.com/certificates/JLX1DOWO6Z72"]
    ]
    
    return (
        <>
            <ServiceSertifications data={data} />
        </>
    )
}

const dicodingCertifications = () => {
    const data: string[][] = [
        ["Belajar Dasar Javascript", "https://www.dicoding.com/certificates/L4PQGO36OZO1"],
        ["Belajar Dasar Manajer Projek", "https://www.dicoding.com/certificates/53XEN57KVXRN"], 
        ["Memulai Dasar Pemrograman untuk Menjadi Pengembang Software", "https://www.dicoding.com/certificates/2VX3J9R9VPYQ"]
    ]

    return (
        <>
            <ServiceSertifications data={data} />
        </>
    )
}

const coursera = () => {
    const data: string[][] = [
        ["Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
         "https://www.coursera.org/account/accomplishments/certificate/7YJCTHTKWKHS"],
    ]

    return (
        <>
            <ServiceSertifications data={data} />
        </>
    )
}

const udemy = () => {
    const data: string[][] = [
        ["Microsoft Excel – Advanced Excel Formulas & Functions",
         "https://www.udemy.com/certificate/UC-82d677a2-25d1-4a24-9b10-afdf2b74668e/"],
    ]

    return (
        <>
            <ServiceSertifications data={data} />
        </>
    )
}

export { dsCertifications, dicodingCertifications, coursera, udemy, Learning, Path }
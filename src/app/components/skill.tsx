const data = [
        {
            imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            alt: "python3",
            width: "65"
        },
        {
            imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" ,
            alt: "go",
            width: "65"
        },
        {
            imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" ,
            alt: "typescript",
            width: "65"
        },
        {
            imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
            alt: "javascript",
            width: "65"
        },
        {
            imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
            alt: "html5",
            width: "65"
        },
        {
            imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
            alt: "css3",
            width: "65"
        },        
        {
            imgLink: "https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png",
            alt: "boostrap",
            width: "65"
        },
        {
            imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
            alt: "mysql",
            width: "65"
        },
        {
            imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
            alt: "postgresql",
            width: "65"
        },
        {
            imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
            alt: "mongodb",
            width: "65"
        },
]

const SkillLogo: React.FC<{imgLink: string, alt: string, width: string}> = ({imgLink, alt, width}) => {
    return (
        <>
            <div className="p-2 sm:w-4/12 md:w-2/12 lg:w-2/12 mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <img src={imgLink} 
                        alt={alt} width={width} height="auto"/>
                </div>
            </div>
        </>
    )
}

const listSkill = () => {
    return (
        data.map((value, index) => 
            <SkillLogo imgLink={value.imgLink} alt={value.alt} width={value.width} key={index} />
        )
    )
}

export default listSkill
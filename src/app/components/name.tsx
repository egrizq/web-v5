const Name: React.FC<{tag: string}> = ({tag}) => {
    return (
        <>
            <div className="flex text-3xl text-bold">
                {tag}
            </div>
        </>
    )
}

const Contacts: React.FC<{tag: string, link: string}> = ({tag, link}) => {
    return (
        <>
            <a href={link}
                className="hover:text-blue-700">{tag}
            </a>
        </>
    )
}

const Section: React.FC<{tag: string}> = ({tag}) => {
    return (
        <>
            <div className="flex py-3 text-2xl font-semibold underline">
                {tag}
            </div>
        </>
    )
}

export { Name, Contacts, Section }
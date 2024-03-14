const Title: React.FC<{name: string, linkTitle: string}> = ({name, linkTitle}) => {
    return (
        <>
            <a href={linkTitle} className="text-xl font-semibold hover:text-blue-700">
                {name}
            </a>
        </>
    )
}

const SourceCode: React.FC<{linkCode: string}> = ({linkCode}) => {
    return (
        <>
            <a href={linkCode} className="underline hover:text-blue-700">
                source code
            </a>
        </>
    )
}

const Main: React.FC<{text: string}> = ({text}) => {
    return (
        <span>
            {text}
        </span>
    )
}

const Tag: React.FC<{name: string}> = ({name}) => {
    return (
        <>
            <div className="p-1">
                <div className="flex bg-green-400 p-1 rounded-md text-xs items-center">
                    <span>{name}</span>
                </div>
            </div>
        </>
    )
}

const Tags: React.FC<{names: string[]}> = ({names}) => {
    return (
        <>
            {names.map((name, index) => (
                <Tag key={index} name={name} />
            ))}
        </>
    )
}

export {Title, SourceCode, Main, Tags}
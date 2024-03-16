import { Main, SourceCode, Tags, Title } from "./card-support"

const CreateCard: React.FC<{titleName: string, titleLink: string, mainText: string, linkCode: string, tags:string[]}> = ({titleName, titleLink, mainText, linkCode, tags}) => {
    return (
        <>
            <div className="p-3">
                <div className="flex flex-col sm:w-11/12 md:w-11/12 lg:w-8/12 xl:w-6/12  space-y-3 p-4 text-justify bg-gray-200 mx-auto rounded-md font-mono">
                    <Title 
                        name={titleName} 
                        linkTitle={titleLink} />
                    <Main 
                        text={mainText} />
                    <SourceCode 
                        linkCode={linkCode} />
                    <div className="flex flex-wrap">
                        <Tags 
                            names={tags} />
                    </div>
                </div>
            </div>
        </>
    )
}

const renderCard: React.FC<{show: boolean}> = ({show}) => {
    const data = [
        {
            titleName: "Exploring Bike Sharing System",
            titleLink: "https://medium.com/@rizq.ramadhan17/bike-sharing-analysis-cc8f1c987b1e",
            mainText: "Exploring the correlations between user behavior by season, weather, temperature, and hour to identify bike sharing patterns",
            linkCode: "https://github.com/egrizq/bike_analysis/tree/master",
            tags: ["Exploratory Data Analysis", "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
        },
        {
            titleName: "Sentiment Analysis for Batik Air Reviews",
            titleLink: "https://medium.com/@rizq.ramadhan17/sentiment-analysis-for-batik-air-reviews-b834d9b13391",
            mainText: "Implemented web scraping to collect the reviews. Utilized the Vader Sentiment for in-depth sentiment analysis and visualization through Word Cloud",
            linkCode: "https://github.com/egrizq/batik_air/blob/main/batik_air_reviews.ipynb",
            tags: ["Python", "NLTK", "Beautiful Soup", "Vader Sentiment"]
        },
        {
            titleName: "Alphabet Recognition with CNN Model",
            titleLink: "https://medium.com/@rizq.ramadhan17/alphabet-recognition-with-cnns-model-34005fa5b89d",
            mainText: "Developed a Convolutional Neural Networks (CNN) model to recognize lowercase alphabets with 85% accuracy rate.",
            linkCode: "https://www.kaggle.com/code/rizqramadhan/german-alphabet-recognition",
            tags: ["Deep Learning", "Python", "TensorFlow", "Pandas", "Numpy", "Matplotlib"]
        },
        {
            titleName: "Power BI: A showcase of my Dashboards",
            titleLink: "https://medium.com/@rizq.ramadhan17/power-bi-dashboard-a-showcase-of-my-work-ebd1ba69859e",
            mainText: "Collection of my Power BI dashboards",
            linkCode: "https://medium.com/@rizq.ramadhan17/power-bi-dashboard-a-showcase-of-my-work-ebd1ba69859e ",
            tags: ["Power BI"]
        },
    ]
    
    if(show) {
        return (
            data.map((insert, index) => (
                <CreateCard
                    key={index}
                    titleName={insert.titleName}
                    titleLink={insert.titleLink}
                    mainText={insert.mainText}
                    linkCode={insert.linkCode}
                    tags={insert.tags}
                />
            ))
        )
    }
}

export { CreateCard, renderCard }
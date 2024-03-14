"use client"
import { useState } from "react";
import "../app/styles.css"
import {CreateCard, renderCard } from "./components/cards";
import {Contacts, Name, Section} from "./components/name"
import listSkill from "./components/skill";
import jobDesc from "./components/job-desc";
import { dsCertifications, dicodingCertifications, coursera, udemy, Learning, Path } from "./components/certifications";

export default function Home() {
    const [show, setShow] = useState<boolean>(true)
    
    return (
    <>
        <div className="container mx-auto p-2">
            <div className="flex justify-center">
                <div className="flex sm:w-11/12 md:w-11/12 lg:w-8/12 xl:w-6/12 flex-col">
                    <div className="flex p-4">
                        <img src="/round photo.png" width="150" height="auto" />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <Name tag="Hey, I'm Muhammad Rizq Ramadhan" />
                        <Name tag="I'm a Software Engineering" />
                        <Name tag="Based in Jakarta, Indonesia" />
                    </div>

                    <div className="flex text-justify py-6">
                        As a 5th semester Computer Science student at Universitas Dian Nusantara, 
                        I’m excited to share my journey and the portfolio I’m working on!
                    </div>

                    <div className="flex flex-row space-x-2 py-3">
                        <Contacts 
                            tag="Resume" 
                            link="https://www.linkedin.com/in/muhammad-rizq-ramadhan-031a1a1ba/" />
                        <Contacts 
                            tag="Linkendln" 
                            link="https://www.linkedin.com/in/muhammad-rizq-ramadhan-031a1a1ba/" />
                        <Contacts 
                            tag="Email" 
                            link="https://www.linkedin.com/in/muhammad-rizq-ramadhan-031a1a1ba/" />
                        <Contacts 
                            tag="Medium" 
                            link="https://medium.com/@rizq.ramadhan17" />
                        <Contacts 
                            tag="Github" 
                            link="https://github.com/egrizq" />
                    </div>

                    <Section tag="Projects" />
                </div>

            </div>

            <div className="flex flex-col py-3">
                <CreateCard 
                    titleName="The Main Idea Building Text Summarization Using Hugging Face!"
                    titleLink="https://medium.com/@rizq.ramadhan17/the-main-idea-building-text-summarization-using-hugging-face-fae34e7500f4"
                    mainText="Sharing ideas and building text summarization using Transformers from Hugging Face to understand English long text into a concise conclusion Bahasa."
                    linkCode="https://github.com/egrizq/text_summarization"
                    tags={["Text Summarization", "Python", "Machine Learning", "Javascript", "Torch", "HTML", "CSS"]}
                />

                <CreateCard 
                    titleName="Deploying a Model with Pizza or Pasta Recognition in Real Time"
                    titleLink="https://medium.com/@rizq.ramadhan17/end-to-end-deploying-a-cnn-model-to-local-host-e509b85909f1"
                    mainText="Deploying a Convolutional Neural Networks (CNN) model with Flask to recognize pizza and pasta images in real-time on local development."
                    linkCode="https://github.com/egrizq/pizza_or_pasta/tree/master"
                    tags={["Deep Learning", "Python", "TensorFlow", "Image Processing", "Flask", "HTML", "Boostrap"]}
                />

                <CreateCard 
                    titleName="Exploring Bike Sharing System"
                    titleLink="https://medium.com/@rizq.ramadhan17/bike-sharing-analysis-cc8f1c987b1e"
                    mainText="Exploring the correlations between user behavior by season, weather, temperature, and hour to identify bike sharing patterns"
                    linkCode="https://medium.com/@rizq.ramadhan17/bike-sharing-analysis-cc8f1c987b1e"
                    tags={["Exploratory Data Analysis", "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"]}
                />

                <CreateCard 
                    titleName="Sentiment Analysis for Batik Air Reviews"
                    titleLink="https://medium.com/@rizq.ramadhan17/sentiment-analysis-for-batik-air-reviews-b834d9b13391"
                    mainText="Implemented web scraping to collect the reviews. Utilized the Vader Sentiment for in-depth sentiment analysis and visualization through Word Cloud"
                    linkCode="https://github.com/egrizq/batik_air/blob/main/batik_air_reviews.ipynb"
                    tags={["Python", "NLTK", "Beautiful Soup", "Vader Sentiment"]}
                />

                {renderCard({show})}
            </div>

            <div className="container flex justify-center mx-auto p-2 font-mono">
                <button className="px-4 py-2 bg-gray-300 border-black border-2 border-opacity-50 hover:bg-gray-200 rounded-sm"
                    onClick={() => setShow(!show)}>
                    {!show ? <p>See All</p> : <p>Close</p>}
                </button>
            </div>

            <div className="flex justify-center">
                <div className="flex sm:w-11/12 md:w-11/12 lg:w-8/12 xl:w-6/12 flex-col space-y-4">
                    
                    <Section tag="Education" />
                    <div className="flex flex-col space-y-4 text-justify">
                        <h1 className="font-semibold text-xl">Computer Science</h1>
                        <p>Universitas Dian Nusantara (2021 – Now)</p>
                        <p>Having a 3.42 cumulative IPK in the 5th semester</p>
                        <p>I'm enthusiastic about pursuing opportunities in the data field to contribute my skills in data analysis, programming, and problem-solving to a dynamic team.</p>
                    </div>

                    <Section tag="Work Experience" />
                    <span className="flex font-semibold text-xl">
                        Calibration Specialist
                    </span>
                    <span className="flex">
                        PT.Suryaraya Rubberindo Industries (Mart 2021 – Mart 2023)
                    </span>
                    <div className="flex text-justify px-6">
                        {jobDesc()}
                    </div>
                    
                    <Section tag="Skills" />
                    <div className="flex w-full justify-center p-2 py-3">
                        <div className="flex sm:w-10/12 md:w-12/12 justify-center flex-wrap">
                            {listSkill()}
                        </div>
                    </div>

                    <Section tag="Certifications" />
                    <Learning name="IDCamp 2023" />
                    <Path name="Data Science Learning Path" />
                    <div className="flex text-justify px-6">
                        {dsCertifications()}
                    </div>

                    <Learning name="Dicoding" />
                    <Path name="Dicoding For University Batch 1" />
                    <div className="flex text-justify px-6">
                        {dicodingCertifications()}
                    </div>

                    <Learning name="Others" />
                    <Path name="Coursera" />
                    <div className="flex text-justify px-6">
                        {coursera()}
                    </div>
                   
                    <Path name="Udemy" />
                    <div className="flex text-justify px-6">
                        {udemy()}
                    </div>

                </div>
            </div>
        </div>

    </>
  );
}

"use client"
import { useState } from "react";
import "../app/styles.css"
import {CreateCard, renderCard } from "./components/cards";
import {Contacts, Name, Section} from "./components/name"
import listSkill from "./components/skill";
import jobDesc from "./components/job-desc";
import { dsCertifications, dicodingCertifications, coursera, udemy, Learning, Path } from "./components/certifications";

export default function Home() {
    const [show, setShow] = useState<boolean>(false)
    const [email, setEmail] = useState<boolean>(false)

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('rizq.ramadhan17@gmail.com');
        alert("The email has been copied.")
    }
    
    return (
    <>
        <div className="container mx-auto p-2">
            <div className="flex justify-center">
                <div className="flex sm:w-11/12 md:w-11/12 lg:w-8/12 xl:w-6/12 flex-col">
                    <div className="flex p-4">
                        <img src="/round photo.png" alt="foto profile" width="150" height="auto" />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <Name tag="Hey, I'm Muhammad Rizq Ramadhan" />
                        <Name tag="I'm a Software Engineering" />
                        <Name tag="Based in Jakarta, Indonesia" />
                    </div>

                    <div className="flex text-justify py-3">
                        As a 5th semester Computer Science student at Universitas Dian Nusantara, 
                        I’m excited to share my journey and the portfolio I’m working on!
                    </div>

                    <div className="flex flex-row space-x-2 py-3">
                        <a href="/CV_Muhammad Rizq Ramadhan.pdf" className="hover:text-blue-700" download>Resume</a>
                            <span>|</span>
                        <Contacts 
                            tag="Linkendln" 
                            link="https://www.linkedin.com/in/muhammad-rizq-ramadhan-031a1a1ba/" />
                            <span>|</span>

                        <button onClick={() => setEmail(!email)} className="hover:text-blue-700">
                            {!email ? <p>Email</p> : <p onClick={handleCopyEmail}>rizq.ramadhan17@gmail.com</p>}
                        </button>
                        <span>|</span>
 
                        <Contacts 
                            tag="Medium" 
                            link="https://medium.com/@rizq.ramadhan17" />
                            <span>|</span>
                        <Contacts 
                            tag="Github" 
                            link="https://github.com/egrizq" />
                    </div>

                    <Section tag="Projects" />
                </div>

            </div>

            <div className="flex flex-col py-3">
                <CreateCard 
                    titleName="CRUD API for Animal Grooming Services with TypeScript"
                    titleLink="https://github.com/egrizq/animal-grooming/blob/master/README.md"
                    mainText="Building RESTful API for animal grooming services with TypeScript and Express.js. Leveraging Prisma ORM and MySQL, ensuring efficient database management. Implement JWT for secure authentication and Zod with data validation."
                    linkCode="https://github.com/egrizq/animal-grooming/tree/master/src"
                    tags={["REST API", "TypeScript", "Express.js", "Prisma", "MySQL", "JWT", "Zod"]}
                />
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
                    <div className="flex flex-col space-y-3 text-justify">
                        <h1 className="font-semibold text-xl">Computer Science</h1>
                        <p>Universitas Dian Nusantara (2021 – Present)</p>
                        <div className="px-2">
                            <span>I'm enthusiastic about pursuing opportunities in the Software Engineering field 
                                to contribute my skills in data analysis, programming, and problem-solving to a dynamic team.</span>
                        </div>

                        <h1 className="font-semibold text-xl">LeetCode</h1>
                        <div className="flex justify-center items-center">
                            <img src="https://leetcard.jacoblin.cool/egrizq?theme=light&border=1&animation=false" 
                                width={"550px"}  />
                        </div>
                    </div>


                    <Section tag="Work Experience" />
                    <a href="https://medium.com/@rizq.ramadhan17/apa-itu-kalibrasi-81020acc5e18" 
                        className="flex font-semibold text-xl hover:text-blue-700">
                        Calibration Specialist
                    </a>
                    <span className="flex">
                        PT.Suryaraya Rubberindo Industries (Mart 2021 – Mart 2023)
                    </span>
                    <div className="flex text-justify px-6">
                        {jobDesc()}
                    </div>
                    
                    <Section tag="Tech Stacks" />
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
                    <div className="flex text-justify px-6 pb-4">
                        {udemy()}
                    </div>

                    <hr className="border-t border-1 border-dashed border-black " />

                    <div className="flex flex-row justify-around space-x-3 pb-4">
                        <Contacts 
                            tag="Linkendln" 
                            link="https://www.linkedin.com/in/muhammad-rizq-ramadhan-031a1a1ba/" />
                        <a href="/CV_Muhammad Rizq Ramadhan.pdf" className="hover:text-blue-700" download>Resume</a>
                        <span>🤝</span>
                        <Contacts 
                            tag="Medium" 
                            link="https://medium.com/@rizq.ramadhan17" />
                        <Contacts 
                            tag="Github" 
                            link="https://github.com/egrizq" />
                    </div>

                </div>
            </div>
        </div>

    </>
  );
}

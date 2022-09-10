import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "./components/Link";
import Mailing from "./components/Mailing";
import Accordion from "react-bootstrap/Accordion";

function Competitions() {
    const competitions = [
        {
            title: "National Economics Challenge",
            sections: [
                {
                    name: "Resources:",
                    content: <>
                        <Link className="d-block" url="http://councilforeconed.org/national-economics-challenge/">Council for Econ Education Page</Link>
                        <Link className="d-block" url="https://econchallenge.unl.edu/California/Welcome">Econ Challenge Website</Link>
                    </>
                },
                {name: "Who should join:", content: "Anyone! Students who have taken AP Economics will be put in one group (Adam Smith) while students who have not taken AP Economics will be put in another group (David Ricardo). This is to ensure that individuals are paired with those with similar skill levels."},
                {name: "How it works:", content: "Teams of 3-4 people take an online qualifying test of 30 questions in 30 minutes (each person takes the exam separately). The top 3 scores from each team are added together to get the final score. The top 5 teams of each region will advance to States, where both a written and buzzer round will take place.  Winners of states take a longer test to filter out the top four teams in the nation, who get to travel to New York, on an all expenses paid trip, where they compete for the top spot."}
            ]
        },
        {
            title: "Harvard Pre-Collegiate Economics Challenge",
            sections: [
                {
                    name: "Resources:",
                    content: <Link url="http://www.hcs.harvard.edu/huea/hpec_home.php">Harvard Pre-Collegiate Economics Challenge</Link>
                },
                {name: "Who should join:", content: "People who have a prior knowledge in Economics (Have taken/are taking AP Economics). People who are willing to dedicate time to dive deep into different economic ideas/terms. People who are willing to travel to Harvard to compete."},
                {name: "How it works:", content: "Teams of 4 people take a written test in order to seed the 64 total teams for the buzzer round (quiz bowl style). The results are decided ultimately by the buzzer round, but the written test is important to get good match-ups for the buzzer rounds."}
            ]
        },
        {
            title: "Personal Finance Challenge",
            sections: [
                {
                    name: "Resources:",
                    content: <Link url="https://financechallenge.unl.edu/California/Welcome">Personal Finance Challenge Page</Link>
                },
                {name: "Who should join:", content: "Anyone! People who are interested in Personal Finance."},
                {name: "How it works:", content: "Teams of 3-4 people take an online qualifying test of 30 questions in 30 minutes (each person takes the exam separately). The top 3 scores from each team are added together to get the final score. The top 10 teams of each region will advance to States, where both a written and buzzer round will take place.  Winners of states get to compete on the national level."},
                {name: "Dates:", content: "2022-2023 times to be determined"}
            ]
        },
    ];

    const essay = [
        {
            title: "Harvard International Economics Essay Competition",
            sections: [
                {
                    name: "Resources:",
                    content: <Link url="https://www.thehuea.org/hieec">HIEEC</Link>
                },
                {
                    name: "Description:",
                    content: <>The 2021 Harvard International Economics Essay Contest is sponsored by the Harvard Undergraduate Economics Association (HUEA) in conjunction with the Harvard College Economics Review (HCER). This essay competition is open to high school students of any year and is a fantastic opportunity to demonstrate an accomplished level of writing and understanding of economic theory. Through the contest, student competitors hone their academic and professional skills and exhibit their knowledge to future employers and academic programs. <strong>Competitors must construct a convincing argument using economic theory and real-world examples.</strong> Winning essays will be published in the Harvard Economics Review and will be available for the greater Harvard community to read. Essays should focus on argumentation supported with facts and references, although data-based support is also welcome.</>
                },
            ]
        }
    ];

    function createAccordion(name, arr) {
        return (
            <div className="p-3 mb-3">
                <h2 className="mb-3">{name}</h2>
                <Accordion>
                    {arr.map((a, index) => {
                        return (
                            <Accordion.Item eventKey={index} key={index}>
                                <Accordion.Header>{a.title}</Accordion.Header>
                                <Accordion.Body>
                                    {a.sections.map((section, index) => {
                                        return (
                                            <div key={index}>
                                                <h4 className="my-2">{section.name}</h4>
                                                <>{section.content}</>
                                            </div>
                                        );
                                    })}
                                </Accordion.Body>
                            </Accordion.Item>
                        );
                    })}
                </Accordion>
            </div>
        );
    }

    return (
        <>
            <Header />
            {createAccordion("Challenge Competitions:", competitions)}
            {createAccordion("Essay Competitions:", essay)}
            <Mailing className="mt-3" />
            <Footer />
        </>
    );
}

export default Competitions;
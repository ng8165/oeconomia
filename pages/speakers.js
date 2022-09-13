import Section from "../components/Section";
import Link from "../components/Link";
import Mailing from "../components/Mailing";
import Head from "next/head";
import Card from "react-bootstrap/Card";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

export default function Speakers() {
    const speakers = [
        {
            img: "rupa_jack",
            name: "Rupa Jack",
            content: <>
                <div>Oeconomia is super excited to announce that Rupa Jack, a Senior Vice President and Wealth Advisor at Morgan Stanley, will be speaking about personal finance and the importance of networking. She will specifically be talking about the following topics:</div>
                <ul>
                    <li>How to start being financially conscious as you’re entering college</li>
                    <li>How to make and save money through investments and other financial strategies (even when you’re under 18)</li>
                    <li>How to network and form career connections</li>
                </ul>
            </>
        },
        {
            img: "russ_roberts",
            name: "Russ Roberts",
            content: <>We are so excited to announce our next speaker event, where we will be hosting Russ Roberts, the John and Jean De Nault Research Fellow at Stanford University’s Hoover Institution and the host of the award-winning podcast EconTalk. He’s known for making difficult economics topics easy to understand in his podcast, where he has interviewed people like Milton Friedman, Jill Lepore, and Michael Lewis. We encourage you to search him up and check him out at <Link url="https://russroberts.info/">russroberts.info</Link> and <Link url="https://www.econtalk.org/">econtalk.org</Link> (or Wikipedia, whatever you prefer).</>
        },
        {
            img: "daryn_dodson",
            name: "Daryn Dodson",
            content: "Daryn Dodson is the Managing Director of Illumen Capital, the world’s first private equity firm focused on reducing implicit bias, and an advocate for social and economic justice. His work with impact investors, Fortune 100 companies, private equity funds, and universities and foundations has been aimed at addressing some of the world’s most pressing social and environmental problems. He also currently serves on the Board of Directors for Ben and Jerry’s."
        },
        {
            img: "larry_stone",
            name: "Larry Stone",
            content: "Larry Stone is the County Assessor for Santa Clara County and was a former Mayor of Sunnyvale. Stone has also been a financial manager on Wall Street and has co-founded a successful Bay Area real estate investment and development firm. We are excited to hear what he has to say."
        },
        {
            img: "angela_ma",
            name: "Angela Ma",
            content: "Angela Ma, who graduated from Harker in 2014, is a current PhD candidate in business economics at Harvard Business School and the Harvard Economics Department. Her research interests lie in financial and behavioral economics."
        },
        {
            img: "matthew_jackson",
            name: "Matthew Jackson",
            content: "Dr. Matthew Jackson is the William D. Eberle Professor of Professor of Economics and Game Theory at Stanford. He also is an external faculty member of the Santa Fe Institute, and a fellow of CIFAR. Jackson has been honored with the Social Choice and Welfare Prize, the B.E.Press Arrow Prize for Senior Economists, and a Guggenheim Fellowship."
        },
        {
            img: "randall_lewis",
            name: "Randall Lewis",
            content: <>
                <div>Randall Lewis is an Economic Research Scientist in the Science & Algorithms team at Netflix. Lewis combines machine learning and econometrics to develop scalable causal measurement and prediction systems that help humans and machine-learning algorithms make optimal choices. Prior to joining Netflix in 2015, he worked at Google and Yahoo! Research where he studied advertising’s and digital markets.</div>
                <div>You can find his blog <Link url="http://econinformatics.com/blog/about/">here</Link>.</div>
            </>
        },
        {
            img: "kelly_steckelberg",
            name: "Kelly Steckelberg",
            content: "We will be holding a joint event with CareerConnect to host Ms. Kelly Steckelberg, the CFO of Zoom. She also currently holds roles as Board Member and Audit Committee Chair at Qualtrics. She will discuss her path to success, along with how she uses economic analysis in her work at Zoom today."
        },
        {
            img: "guru_guruganesh",
            name: "Guru Guruganesh",
            content: "A Senior Research Scientist at Google Research, Dr. Guruganesh’s research focuses on new, provable algorithms at the intersection of algorithmic game theory, theoretical machine learning, and approximation algorithms. In his talk, he delves into the idea of equilibria being present in our day-to-day lives. He explainins various equilibria such as Mixed Nash Equilibrium and those present in the game of Chicken."
        },
    ];
    
    return (
        <>
            <Head><title>Speakers | Oeconomia Economics Society</title></Head>
            
            <Section color="linear-gradient(lightgray, white)">
                <div className="my-5 py-5 fs-1">Speakers</div>
            </Section>
            
            <Swiper
                className="p-3"
                modules={[Navigation]}
                slidesPerView="auto"
                spaceBetween={30}
                speed={250}
                direction="horizontal"
                navigation
                loop={true}
                breakpoints={{
                    576: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                    1400: { slidesPerView: 5 }}}
            >
                {speakers.map((speaker, index) => {
                    return (
                        <SwiperSlide key={index} className="speaker-slide">
                            <Card className="speaker-card">
                                <Card.Body className="speaker-body">
                                    <picture>
                                        <source srcSet={`/img/people/${speaker.img}.jpeg`} type="image/jpeg" />
                                        <img src={`/img/people/${speaker.img}.jpeg`} alt={speaker.name} width="200" height="200" />
                                    </picture>

                                    <Card.Title><h2 className="mt-2 text-center">{speaker.name}</h2></Card.Title>
                                    <div className="speaker-text">{speaker.content}</div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <Mailing />
        </>
    );
}
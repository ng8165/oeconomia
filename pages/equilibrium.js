import Link from "../components/Link";
import Section from "../components/Section";
import Mailing from "../components/Mailing";
import { Accordion, OverlayTrigger, Tooltip, Row, Col } from "react-bootstrap";
import React from "react";
import Head from "next/Head";

export default function Equilibrium() {
    const equilibrium = [
        {
            title: "Equilibrium Issue 4, 2022",
            content: [
                "Editor in Chief: Catherine He ’22",
                "Managing Editors: Nicole Tian ’22, Reagan Ka ’22, Sonya He ’23, Claire Luo ’24, Desiree Luo ’24",
                "Copy Editors: Ryan Chang ’23, Caden Lin ’22, April Sun ’22, Yejin Song ’22",
                "186 pages, 38 articles, 30 contributors"
            ]
        },
        {
            title: "Equilibrium Issue 3, 2021",
            content: [
                "Co-Editors in Chief: Arushi Saxena ’21, Michelle Si ’21",
                "Managing Editors: Catherine He ’22, Nicole Tian ’22, Reagan Ka ’22",
                "Copy Editors: Yejin Song ’22, April Sun ’22",
                "134 pages, 32 articles, 43 contributors"
            ]
        },
        {
            title: "Equilibrium Issue 2, 2020",
            content: [
                "Co-Editors in Chief: Arushi Saxena ’21, Michelle Si ’21",
                "Managing Editor: Nicole Tian ’22",
                "Copy Editors: Yejin Song ’22, April Sun ’22",
                "30 pages, 6 articles, 12 contributors"
            ]
        },
        {
            title: "Equilibrium Issue 1, 2019",
            content: [
                "Co-Editors in Chief: Arushi Saxena ’21, Michelle Si ’21",
                "Managing Editor: Nicole Tian ’22",
                "64 pages, 23 articles, 29 contributors"
            ]
        }
    ];

    const images = [
        { img: "Issue_4_Cover", name: "Equilibrium Issue 4, 2022", url: "https://issuu.com/theharkerschool/docs/harker_equilibrium_summer2022"},
        { img: "Issue_3_Cover", name: "Equilibrium Issue 3, 2021", url: "https://issuu.com/theharkerschool/docs/equilibrium3_summer2021_v6"},
        { img: "Issue_2_Cover", name: "Equilibrium Issue 2, 2020", url: "https://issuu.com/theharkerschool/docs/equilibrium_issue2__election_2020_mini-edition_"},
        { img: "Issue_1_Cover", name: "Equilibrium Issue 1, 2019", url: "https://issuu.com/theharkerschool/docs/equilibrium__2019-2020_"}
    ];

    return (
        <>
            <Head>
                <meta name="description" content="Equilibrium is the student-run economics magazine of Harker’s upper school, encompassing student interpretations of modern issues and personal experiences through an economic lens." />
                <title>Equilibrium | Oeconomia Economics Society</title>
            </Head>

            <Section color="#333333">
                <Row>
                    {images.map((image, index) => {
                        return (
                            <Col lg="3" md="4" sm="6" className="py-3" key={index}>
                                <Link url={image.url}>
                                    <OverlayTrigger placement="top" overlay={<Tooltip>{image.name}</Tooltip>}>
                                        {({ ref, ...triggerHandler }) => (
                                            <picture {...triggerHandler}>
                                                <source srcSet={`/img/cover_art/${image.img}.png`} type="image/png" />
                                                <img ref={ref} className="eq-img" src={`/img/cover_art/${image.img}.png`} alt={image.name} width="612" height="792" />
                                            </picture>
                                        )}
                                    </OverlayTrigger>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>
            </Section>

            <Row className="my-3 p-3">
                <Col md="6">
                    <div className="mb-3">
                        <OverlayTrigger placement="top" overlay={<Tooltip>Click to learn more!</Tooltip>}>
                            <h2 className="mb-3 d-inline-block eq-title" onClick={() => {window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}}>Equilibrium</h2>
                        </OverlayTrigger>
                        <div>Equilibrium is the student-run economics magazine of Harker’s upper school, encompassing student interpretations of modern issues and personal experiences through an economic lens.</div>
                        <div className="mt-3">Feel the urge to submit an article? Equilibrium submissions for 2022-23 open soon, so be on the lookout for any emails by signing up for our mailing list!</div>
                    </div>
                </Col>
                <Col md="6">
                    <Accordion>
                        {equilibrium.map((magazine, index) => {
                            return (
                                <Accordion.Item eventKey={index} key={index}>
                                    <Accordion.Header>{magazine.title}</Accordion.Header>
                                    <Accordion.Body>
                                        {magazine.content.map((text, index) => <div key={index}>{text}</div>)}
                                    </Accordion.Body>
                                </Accordion.Item>
                            );
                        })}
                    </Accordion>
                </Col>
            </Row>

            <Mailing />
        </>
    );
}
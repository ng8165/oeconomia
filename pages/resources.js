import Mailing from "../components/Mailing";
import Link from "../components/Link"
import Head from "next/Head";
import NextLink from "next/Link";
import { Container, Row, Col } from "react-bootstrap";

export default function Resources() {
    return (
        <>
            <Head><title>Resources | Oeconomia Economics Society</title></Head>
            
            <Container fluid className="p-3">
                <Row className="my-3">
                    <Col md="6">
                        <h3>Studying for the National Economics Competition (NEC):</h3>
                    </Col>
                    
                    <Col md="6">
                        <h4>Helpful Documents</h4>
                        <ul>
                            <li><Link url="https://www.councilforeconed.org/archived-tests/">Sample Tests</Link></li>
                            <li><Link url="https://drive.google.com/drive/folders/18U-TDOavX4Xui1ZdPDXmRmsTIUvO5GVo?usp=sharing">Adam Smith Retired Tests</Link></li>
                            <li><Link url="https://drive.google.com/drive/folders/1KNMzagmiAqEQ2kLmtGxqh0VWT4LL9E2T?usp=sharing">David Ricardo Retired Tests</Link></li>
                            <li><Link url="https://econchallenge.unl.edu/Minnesota">Minnesota NEC posts additional practice tests</Link></li>
                            <li><Link url="https://www.census.gov/foreign-trade/statistics/highlights/top/index.html">Census.gov: US Trading Partners</Link></li>
                            <li><Link url="https://www.economist.com/economics-a-to-z">Economic Terms Study Guide: A to Z</Link></li>
                            <li><Link url="http://www.allenzhu.com/projects/EconChallenge/">General Guide + Additional Resources</Link></li>
                            <li><Link url="https://www.investopedia.com/">Investopedia Articles</Link></li>
                            <li><Link url="https://www.investopedia.com/articles/07/economists.asp">10 Influential Economists</Link></li>
                        </ul>
                    </Col>
                </Row>

                <Row className="my-3">
                    <Col md="6">
                        <h3>Additional Resources:</h3>
                    </Col>
                    
                    <Col md="6">
                        <h3>Books:</h3>
                        <ul>
                            <li><Link italic url="https://www.amazon.com/Scorecasting-Hidden-Influences-Behind-Sports/dp/0307591808">Scorecasting</Link> by Tobias Moskowitz and Jon Wertheim</li>
                            <li><Link italic url="https://www.amazon.com/Nudge-Improving-Decisions-Health-Happiness/dp/0300122233">Nudge: Improving Decisions About Health, Wealth and Happiness</Link> by Cass Sunstein and Richard Thale</li>
                            <li><Link italic url="https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555">Thinking, Fast and Slow</Link> by Daniel Kahneman and Amos Tversky</li>
                            <li><Link italic url="https://timharford.com/books/undercovereconomist/">The Undercover Economist</Link> by Tim Harford</li>
                            <li><Link italic url="https://www.principles.com/">Principles for Dealing with the Changing World Order: Why Nations Succeed and Fail</Link> by Ray Dalio</li>
                        </ul>

                        <h3>Magazines:</h3>
                        <ul>
                            <li>Check out Harker&apos;s very own <NextLink href="/equilibrium"><a className="eq-txt">Equilibrium</a></NextLink>!</li>
                            <li><Link url="https://www.bloomberg.com/businessweek">Bloomberg Businessweek</Link></li>
                            <li><Link url="https://tickertape.tdameritrade.com/trading/thinkmoney">thinkMoney Magazine</Link></li>
                        </ul>

                        <h3>Podcasts:</h3>
                        <ul>
                            <li><Link url="https://www.npr.org/sections/money/">Planet Money</Link></li>
                            <ul>
                                <li><Link url="https://www.npr.org/podcasts/510325/the-indicator-from-planet-money">The Indicator from Planet Money</Link></li>
                            </ul>
                            <li><Link url="https://freakonomics.com/">Freakonomics Radio</Link></li>
                            <ul>
                                <li>Check out Levitt and Dubner’s book, <Link italic url="https://freakonomics.com/books/">Freakonomics</Link></li>
                            </ul>
                            <li><Link url="https://www.marketplace.org/">Marketplace</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Mailing />
        </>
    );
}
import Section from "../components/Section";
import Mailing from "../components/Mailing";

export default function Index() {
    return (
        <>
            <Section color="lightblue">
                <div className="my-5 py-5 fs-1">Home</div>
            </Section>

            <Section color="white">
                <h4 className="pb-3">Our Mission Statement:</h4>
                <div className="fs-4">Harker Oeconomia seeks to <span style={{color: "#1663be"}}>communicate the importance of economics in the modern world</span>, giving students opportunities to explore the field, meet professionals, submit written work, and advance their interest. <em>Equilibrium</em>, Harker’s Economics Magazine, will also operate under the purview of Oeconomia, under two student Co-Editors-in-Chief.</div>
            </Section>

            <Mailing />
        </>
    );
}
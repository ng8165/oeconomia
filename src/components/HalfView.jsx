import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HalfView(props) {
    return (
        <Row className={"my-3 " + props.className || ""}>
            <Col md="6">{props.children[0]}</Col>
            <Col md="6">{props.children[1]}</Col>
        </Row>
    );
}

export default HalfView;
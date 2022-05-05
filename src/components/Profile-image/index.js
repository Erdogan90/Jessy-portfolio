import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import jessy from "../../images/P6130006.jpeg"
import css from "../../styles/image.module.css"

function ProfileImage(){
    return <Row className={css.div}>
    <Col className={css.image}> 
    <Image src={jessy} roundedCircle/>
    </Col>
    <Col className={css.header} >
        <h1 className={css.text}>Jessy Anne Scott</h1>
        </Col>
        <Col className={css.second} >
        <h1 className={css.text}> Copywriter & Marketing Specialist</h1>
    </Col>
    </Row>
}

export default ProfileImage
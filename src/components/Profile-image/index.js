import React from "react";
import { Image } from "react-bootstrap";
import jessy from "../../images/P6130006.jpeg"
import css from "../../styles/image.module.css"

function ProfileImage(){
    return <div className={css.div}>
        <Image className={css.image} src={jessy} roundedCircle/>
        <h1 className={css.header}>Jessy Anne Scott | Copywriter & Marketing Specialist</h1>
    </div>
}

export default ProfileImage
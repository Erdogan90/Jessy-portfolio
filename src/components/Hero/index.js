import React from "react";
import css from "../../styles/hero.module.css"

function Hero(){
    return <div className={css.image}>
    <img src="https://images.unsplash.com/photo-1513348355499-5bdba1597a80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Marketing pic"/>
    </div>
}

export default Hero
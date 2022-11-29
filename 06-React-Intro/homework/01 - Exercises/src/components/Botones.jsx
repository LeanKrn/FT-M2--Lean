import React from "react";
import { alerts } from "./Bienvenido";

export function Botones (){
    return(
        <div>
            <button onClick={() => alert(alerts.m1)}>Módulo 1</button>
            <button onClick={() => alert(alerts.m2)}>Módulo 2</button>
        </div>
    )
}
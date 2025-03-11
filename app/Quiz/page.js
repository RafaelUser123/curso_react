'use client'    
import { useState } from "react";
import "./quiz.css"

function Quiz() {

    const[p1, alterap1] = useState(0)
    const[p2, alterap2] = useState(0)
    const[p3, alterap3] = useState(0)
    const[p4, alteraP4] = useState("")
    const[total, alteratotal] = useState(0)

    const [selecionado, alteraselecionado]= uneState(0)

    function calculaPontos(){
        if(p4 == "Tropa de elite"){
            alteratotal(total+1)
        }
    }

    return ( 
        <div>
            <h1>Quiz Rafito</h1>
            <p>Assinale a opção correta!</p>

            <hr/>

            <h2> Qual a cor do cavalo branco de napoleão?</h2>
            <label> <input name="p1" type="radio" onChange={()=> alterap1(0)}/> Preto</label><br/>
            <label> <input name="p1" type="radio" onChange={()=> alterap1(0)}/> Azul </label><br/>
            <label> <input name="p1" type="radio" onChange={()=> alterap1(1)}/> Branco</label><br/>
            <label> <input name="p1" type="radio" onChange={()=> alterap1(0)}/> Transparente</label>
             
            <hr/>

            <h2> Qual a melhor letra?</h2>

            <label> <input name="p2" type="radio" onChange={()=> alterap2(0)}/> B</label> <br/>

            <label> <input name="p2" type="radio" onChange={()=> alterap2(0)}/> E</label> <br/>

            <label> <input name="p2" type="radio" onChange={()=> alterap2(1)}/> C</label> <br/>

            <label> <input name="p2" type="radio" onChange={()=> alterap2(0)}/> D</label> <br/>
            
            <hr/> 

            <hr/>

            <h2> Quanto é 2+2? </h2>


                <ul>
                    <li className="selecionado" onClick={ ()=> alterap3(1) }> 4 </li>
                    <li onClick={ ()=> alterap3(0) }> 6 </li>
                    <li onClick={ ()=> alterap3(0) }> 10 </li>
                    <li onClick={ ()=> alterap3(0) }> 8 </li>
                        
                </ul>



           
            <hr/>

            <button onClick={()=> alteratotal(p1+p2+p3)}>Enviar respostas</button>

            <p> Total de pontos: {total}</p>
       


        </div>
    );
}

export default Quiz;

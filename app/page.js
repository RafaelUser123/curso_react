'use client'
import { useState } from "react";
import "./home.css" 


export default function Home() {
   
    
    let [carrinho, setCarrinho] = useState(0)
    
    

  return (
        <div><h1>Olá, mundo!</h1>
        <p>Estou aprendendo React</p>

        <hr/>

        <p className="carrinho" >Itens no carrinho: {carrinho} </p>

        <hr/>

        <h2>Produtos</h2>

        <div className="produto">
            <img width="150" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREt4aFvzTssx1kxkF7evtFi8tX6jC2DsrNWg&s"></img>
            <h2>Produtos</h2>
            <p>Cenoura</p>
            <p>R$ 4,50 (kg)</p>
            
            <button onClick={ ()=> setCarrinho (carrinho+1) } > Comprar </button>
            <br/>
            <button onClick={ ()=> setCarrinho (carrinho-1)}>Remover</button>
            <br/>
            <button onClick={()=>setCarrinho (carrinho=0)}>Limpar</button>

            
        </div>

     </div>
    );
   }
   

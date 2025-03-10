
'use client'
import React, { useState } from 'react'; // Importando useState
import { ToastContainer, toast } from 'react-toastify'; // Importando ToastContainer e toast
import 'react-toastify/dist/ReactToastify.css'; // Importando o CSS do react-toastify

// Componente de mensagem customizada para o toast
const Msg = ({ closeToast, toastProps }) => (
  <div>
    Lorem ipsum dolor {toastProps.position}
    <button>Retry</button>
    <button onClick={closeToast}>Close</button>
  </div>
);

function App() {
  // Estados para armazenar os valores dos campos
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');
  

  // Função para exibir a notificação
  const displayMsg = () => {
    toast("Por favor, preencha todos os campos..." ); // Aqui passamos o componente Msg para o toast
  };

  // Função de envio de mensagem
  const enviaMensagem = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)

    // Verifica se os campos estão preenchidos
    if (nome === '' || mensagem === '') {
      // Se algum campo estiver vazio, exibe um toast de erro
      toast("Por favor, preencha todos os campos...");
    } else {
      // Se ambos os campos estiverem preenchidos, exibe um toast de sucesso
      toast("Mensagem enviada com sucesso!");
    }
  };

  return (
    <div>
      <h1>Página de Contato</h1>
      <p>Entre em contato conosco</p>
      <hr />

      {/* Formulário de envio */}
      <form onSubmit={enviaMensagem}>
        <label>
          Digite seu nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)} // Atualiza o estado do nome
          />
        </label>
        <br />

        <label>
          Digite sua mensagem:
          <input
            type="text"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)} // Atualiza o estado da mensagem
          />
        </label>
        <br />

        <button type="submit">Enviar</button> {/* Envia o formulário */}
      </form>

      {/* Container para exibição de notificações */}
      <ToastContainer />

      {/* Botão para exibir uma notificação personalizada */}
      <button onClick={displayMsg}>Click me</button>
    </div>
  );
}

export default App;
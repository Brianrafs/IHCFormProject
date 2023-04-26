//Components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";

//Hooks
import { useForm } from "./Hooks/useForm";

function App() {
  const formComponents = [
    <UserForm />,
    <ReviewForm />,
    <Thanks />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <div className="app">
      <header>
        <h2>Estamos quase lá!</h2>
        <p>Agradecemos a sua preferência</p>
        <p>Antes de concluir seu pedido precisamos nos conhecer melhor!</p>
        <p>Preencha o formulário abaixo para concluir a compra</p>
      </header>
      <div className="form-container">
        <p>etapas</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="actions">
            <div className="inputs_container">{currentComponent}</div>
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="Button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

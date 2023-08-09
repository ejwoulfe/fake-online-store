import Modal from "react-modal";
import "./login-modal.scss";

interface LoginModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    zIndex: "999",
    transform: "translate(-50%, -50%)",
    yOverflow: "hidden",
    width: "20%",
  },
};
Modal.setAppElement("#root");

export default function LoginModal(props: { state: LoginModalProps }) {
  const { isModalOpen, setIsModalOpen } = props.state;

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
      {" "}
      <div className="modal__close-container">
        <button onClick={closeModal}>X</button>
      </div>
      <div className="modal__container">
        <h2>Sign In</h2>
        <form>
          <input type="text" id="username" name="username" placeholder="Username" className="form__account-info" />

          <input
            type="password"
            id="pass"
            name="password"
            placeholder="Password"
            className="form__account-info"
            required
          />

          <input className="form__signIn-button" type="submit" value="Sign in" />
        </form>
        <a href="#">Forgot Password?</a>
        <p>
          Don't have an account? <a href="#">Sign Up</a>
        </p>
        <p className="modal__or-text">
          <span>or</span>
        </p>
        <div className="modal__alt-login">
          <h3>Login with</h3>
          <div className="alt-login__buttons">
            <button>Google</button>
            <button>Facebook</button>
            <button>Twitter</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

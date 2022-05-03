import styled from "@emotion/styled";

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.15);
  text-align: center;
  overflow: hidden;
`;

const ModalStyle = styled.div`
  position: fixed;
  background: #fff;
  border: 2px solid #ccc;
  box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .modal__button {
    border: 0;
    background: #ff7900;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    line-height: 1;
    color: white;
  }
`;

function Modal({ opened, onClick, children }: any) {
  function handleModalClick(event: any) {
    if (event.currentTarget !== event.target) {
      return;
    }

    onClick();
  }

  return (
    <>
      {opened && (
        <Background onClick={onClick}>
          <ModalStyle>
            {children}
            <button
              className="modal__button"
              type="button"
              onClick={handleModalClick}
            >
              Close
            </button>
          </ModalStyle>
        </Background>
      )}
    </>
  );
}

export default Modal;

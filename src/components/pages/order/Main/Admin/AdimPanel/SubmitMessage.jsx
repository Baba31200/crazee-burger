import { BsFileCheck } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../../../../../../theme";

function SubmitMessage() {
  return (
    <SubmitMessageStyled>
      <BsFileCheck className="icon" />
      <span className="message">Ajouté avec succés</span>
    </SubmitMessageStyled>
  );
}

export default SubmitMessage;

const SubmitMessageStyled = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;

  .icon {
    color: ${theme.colors.success};
    margin-left: 10px;
    width: 1em;
    height: 1em;
    border: 1px solid ${theme.colors.success};
    border-radius: 50%;
    vertical-align: middle;
  }
  .message {
    margin-left: 5px;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.success};
  }
`;

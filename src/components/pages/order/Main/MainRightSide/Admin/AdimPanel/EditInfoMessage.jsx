import styled from "styled-components";
import { theme } from "../../../../../../../theme";

function EditInfoMessage() {
  return (
    <EditMessageStyled>
      <span>
        Cliquer sur un produit du menu pour le modifier{" "}
        <span className="live-update">en temps réel</span>
      </span>
    </EditMessageStyled>
  );
}

const EditMessageStyled = styled.span`
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.SM};
  .live-update {
    text-decoration: underline;
  }
`;

export default EditInfoMessage;

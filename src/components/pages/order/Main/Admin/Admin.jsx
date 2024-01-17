import styled from "styled-components";

import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";

function Admin() {
  return (
    <AdminStyled>
      <AdminTabs />
      <AdminPanel />
    </AdminStyled>
  );
}

export default Admin;

const AdminStyled = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
`;

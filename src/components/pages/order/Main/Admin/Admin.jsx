import React from "react";
import styled from "styled-components";
import AdminPanel from "./AdminPanel";
import AdminTabs from "./AdminTabs";

export default function Admin({
  isCollapsed,
  setIsCollapsed,
  isAddSelected,
  setIsAddSelected,
  isEditSelected,
  setIsEditSelected,
}) {
  return (
    <AdminStyled>
      <AdminTabs
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isAddSelected={isAddSelected}
        setIsAddSelected={setIsAddSelected}
        isEditSelected={isEditSelected}
        setIsEditSelected={setIsEditSelected}
      />
      {!isCollapsed && (
        <AdminPanel
          isAddSelected={isAddSelected}
          isEditSelected={isEditSelected}
        />
      )}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

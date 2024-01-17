import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function AdminTabs() {
  return (
    <AdminTabsStyled>
      <Tab Icon={<FiChevronDown />} />
    </AdminTabsStyled>
  );
}

export default AdminTabs;

const AdminTabsStyled = styled.div`
  display: flex;
  padding: 0 20px;
`;

import styled from "styled-components";

export const Overlay = styled.div`
  
  position: absolute;
  z-index: 2;
  height: 1200px;
  width: 100%;
  overflow: hidden;
  display: ${({ open }) => (open ? "block" : "none")};
`;

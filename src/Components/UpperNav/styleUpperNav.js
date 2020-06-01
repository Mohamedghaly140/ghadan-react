import styled from 'styled-components';


export const UpperNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
`;

export const Contact = styled.div`
@media (max-width: 576px) {
  {display: none;}
}
`; 

export const ContactSpan = styled.span`
  color: #ce8d16;
  font-weight: 600;
`;

export const Icons = styled.div`
@media (max-width: 576px) {
  {margin: auto;}
}
`; 

export const IconsSpan = styled.span`
  margin-left: 20px;

  @media (max-width: 576px) {
    {margin: 5px 20px;}
  }
`;

export const IconsSpanA = styled.a`
  color: #ce8d16;
  text-decoration: none;
`;
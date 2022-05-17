import styled from "styled-components";


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10rem;
`;
export const TitleContainer = styled.div`
  text-align: center;
  line-height: 25px;
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.appTitleColor};
  font-size: 2rem;
`;
export const SubTitle = styled.p`
  color: ${({ theme }) => theme.appTitleColor};
  font-size: 1rem;
  line-height: 20px;
`;
export const GithubLink = styled.a`
  margin-left: 1rem;
  svg {
    fill: ${({ theme }) => theme.appTitleColor};
  }
  &:hover svg {
    fill: #20546a;
  }
`;
export const HeaderIconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

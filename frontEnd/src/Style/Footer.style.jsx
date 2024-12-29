import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #032541;
  color: white;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  gap: 50px; /* Espaço entre seções */
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .logo img {
    width: 150px;
    margin-bottom: 10px;
  }

  .description p {
    font-size: 14px;
    line-height: 1.5;
    max-width: 300px;
    margin: 0;
  }
`;

export const ContactContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 14px;
      margin: 5px 0;

      a {
        color: white;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const SocialContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 14px;
      margin: 5px 0;

      a {
        color: white;
        text-decoration: none;

        &:hover {
          color: #007bff;
        }
      }
    }
  }
`;

export const HoursContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
  }
`;

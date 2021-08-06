import styled from "styled-components";

const SingleImageContainer = styled.div`
  position: relative;
  width: 165px;
  height: 165px;
  border-radius: 7px;
  background-size: cover;
  &:hover div a {
    display: block;
  }
`;

const TextDiv = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  margin: auto;

  h4 {
    display: block;
    text-align: center;
    margin: 0px;
    color: #fff;
  }

  hr {
    width: 20%;
    height: 5px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
  }
  a {
    display: none;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    color: #fff;
    background-color: #01bfbd;
    border-radius: 5px;
  }
`;

export function SingleImageDiv({ h4, image }) {
  return (
    <SingleImageContainer style={{ backgroundImage: `url(${image}) ` }}>
      <TextDiv>
        <h4>{h4}</h4>
        <hr />
        <a href="/">Learn More</a>
      </TextDiv>
    </SingleImageContainer>
  );
}

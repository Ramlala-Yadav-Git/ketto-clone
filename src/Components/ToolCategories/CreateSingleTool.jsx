import styled from "styled-components";
const SingleTool = styled.div`
  hr {
    width: 30%;
    height: 5px;
    border: none;
    background-color: #fec003;
    border-radius: 10px;
  }
  p {
    font-size: 1.2rem;
  }
`;

export function CreateSingleTool({ imagePath, desc }) {
  return (
    <SingleTool>
      <img src={imagePath} alt="Tool_logo" />
      <hr />
      <p>{desc}</p>
    </SingleTool>
  );
}

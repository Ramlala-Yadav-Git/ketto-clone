import styled from "styled-components";
import { SingleImageDiv } from "./SingleImageDiv";
const Gallery = styled.div`
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  margin: auto;
  align-items: center;
  justify-content: center;
  @media all and (max-width: 1200px) {
    width: 60vw;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media all and (max-width: 1000px) {
    width: 60vw;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media all and (max-width: 768px) {
    width: 40vw;
    grid-template-columns: 1fr 1fr;
  }
  /* @media all and (max-width: 650px) {
    width: 60vw;
    grid-template-columns: 1fr 1fr;
  } */
`;
const Others = styled.div`
  position: relative;
  width: 165px;
  height: 165px;
  border-radius: 7px;
  background-color: #01bfbd;
  &:hover {
    background-color: #069392;
  }
  & > div {
    position: absolute;
    bottom: 0px;
    width: 100%;
    margin: auto;
  }
  & > h4 {
    display: block;
    text-align: center;
    margin: 0px;
    color: #fff;
  }
  & > hr {
    width: 20%;
    height: 5px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
  }
`;
export function ImageGallery() {
  return (
    <Gallery>
      <SingleImageDiv
        h4="CANCER"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtzooEd58ntnMigIsuIeBUO28YMB7dWzQuA&usqp=CAU"
        link=""
      />
      <SingleImageDiv
        h4="ACCIDENT"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgp0NisutQ-T-t2MxT1NCLW9T9QzGTNc44-A&usqp=CAU"
        link=""
      />
      <SingleImageDiv
        h4="LIVER CIRHOSIS"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHniObD3ByXg-cO1o_8FJ0ZAgkQ1vD2QxGQ&usqp=CAU"
        link=""
      />
      <SingleImageDiv
        h4="HEART DISEASE"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmY8ZxhZgNP49uZjxLmNPtX9A2oeRBg-H_rgaPjbB7hKNtPtL4iaQu3HJMRsehDxPBGg&usqp=CAU"
        link=""
      />
      <SingleImageDiv
        h4="KIDNEY FAILURE"
        image="https://www.kidney.org/sites/default/files/dt_140819_kidney_failure_800x600%20fb.jpg"
        link=""
      />
      <SingleImageDiv
        h4="CHILD HEALTH"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSval7hsmWg8tjhiODQfNQIb7ZJbpeKtopwrw&usqp=CAU"
        link=""
      />
      <SingleImageDiv
        h4="BRAIN INJURY"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sMA1Qi7OYFCSOLjGkdgPOAO0QJv-ZAnQMg&usqp=CAU"
        link=""
      />
      <SingleImageDiv
        h4="LUNG DISEASE"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWmhxNxdkrf1E8L2TpCyCeTwhFEPnWk0gqw&usqp=CAU"
        link=""
      />
      <SingleImageDiv
        h4="RARE DISEASE"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREohQQVEJ7qNBZgtroHF3Bq31VRNWxG0HdQA&usqp=CAU"
        link=""
      />
      <SingleImageDiv
        h4="ANIMALS"
        image="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/05/08/10/sick-dog.jpg"
        link=""
      />
      <SingleImageDiv
        h4="MEMORIAL"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSSGKVXBmRQoaPwmTElvN4LIXqBXqpuAU_Jw&usqp=CAU"
        link=""
      />
      <Others>
        <div>
          <h4>OTHERS</h4>
          <hr />
        </div>
      </Others>
    </Gallery>
  );
}

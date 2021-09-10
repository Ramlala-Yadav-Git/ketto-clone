// npm install --save-dev @iconify/react @iconify-icons/simple-icons
// import { Icon } from '@iconify/react';
import styled from "styled-components";
export function SingleStory({ prop }) {
  const SoloStory = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    overflow: hidden;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
    box-shadow: 2px 2px 2px 2px  rgba(204, 204, 195, 0.486);
    border-radius: 15px;
    & > img {
      margin-right: 15px;
    }
  & >div{
    padding: 10px;
  }
    & > div > h2 {
      margin: 0;
    }
    & > div > p {
      font-size: 1.2rem;
      line-height: 1.5;
      & > a {
        text-decoration: none;
        color: #01bfbd;
      }
    }
    & > div > div {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: space-evenly;
    }
    & > div > div > span {
      font-size: 1.1rem;
    }
    & > div > div > a {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: space-between;
      text-decoration: none;
      color: #25d366;
      padding: 7px 15px;
      border: 1px solid #25d366;
      border-radius: 20px;
      font-size: 1.2rem;
      font-weight: 500;
    }
    & > div > div > a > * {
      margin-right: 5px;
    }
    & > div > div > a:hover {
      background-color: #25d366;
      color: #fff;
      & > svg {
        color: #fff;
      }
    }

    @media all and (max-width: 1150px) {
      grid-template-columns: 1fr;
      width: 90%;
      & > img {
        margin: auto;
      }
      & > div > div {
        flex-direction: column;
      }
      & > div > h2 {
        margin-top: 10px;
      }
      & > div > div > span {
        font-weight: 500;
        margin-bottom: 7px;
      }
    }
    @media all and (max-width: 630px) {
      & > img {
        width: 80%;
      }
      & > div {
        width: 100%;
      }
    }
  `;
  return (
    <>

      <SoloStory>
        <img src={prop.image} alt="success_story_image" />
        <div>
          <h2>{prop.title}</h2>
          <p>
            {prop.description.slice(0, 480)}...<a href="/">Read more</a>
          </p>
          <div>
            <span>Subscribe to read such inspiring stories</span>
            <a href="/">
              <i style={{
                // width: "50px",
                // height: "50px",
                fontSize: "25px",
                color: "#02b355"
              }} class="fab fa-whatsapp"></i>


              Subscribe
            </a>
          </div>
        </div>
      </SoloStory>
    </>
  );
}

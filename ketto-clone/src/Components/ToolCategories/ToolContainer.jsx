import { CreateSingleTool } from "./CreateSingleTool";
import styled from "styled-components";
export function ToolContainer() {
  const ToolWrapper = styled.div`
    width: 80vw;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    justify-content: center;
    align-items: center;
    grid-gap: 20px;

    @media all and (max-width: 768px) {
      width: 30vw;
      grid-template-columns: 1fr;
    }
  `;
  return (
    <ToolWrapper>
      <CreateSingleTool
        imagePath="https://www.linkpicture.com/q/SuccessRate.png"
        desc="Industry’s best fundraising success rate"
      />
      <CreateSingleTool
        imagePath="https://www.linkpicture.com/q/Donors.png"
        desc="Supported By 55,00,000+ Donors"
      />
      <CreateSingleTool
        imagePath="https://www.linkpicture.com/q/Tools.png"
        desc="Easy-To-Manage Tools To Boost Results"
      />
      <CreateSingleTool
        imagePath="https://www.linkpicture.com/q/Donation_2.png"
        desc="Receive donations via all popular payment modes"
      />
      <CreateSingleTool
        imagePath="https://www.linkpicture.com/q/ExpertSupport.png"
        desc="Get Expert Support 24/7"
      />
      <CreateSingleTool
        imagePath="https://www.linkpicture.com/q/SmartDashBoard.png"
        desc="A Dedicated Smart-Dashboard"
      />
      <CreateSingleTool
        imagePath="https://www.linkpicture.com/q/WithdrawFunds.png"
        desc="Withdraw Funds Without Hassle"
      />
      <CreateSingleTool
        imagePath="https://www.linkpicture.com/q/PaymentSupport.png"
        desc="International Payment Support"
      />
    </ToolWrapper>
  );
}

// npm install --save-dev @iconify/react @iconify-icons/dashicons
// import { Icon } from "@iconify/react";
// import arrowLeftAlt2 from "@iconify-icons/dashicons/arrow-left-alt2";
// import arrowRightAlt2 from "@iconify-icons/dashicons/arrow-right-alt2";
import { useState } from "react";
import styled from "styled-components";
import { SingleStory } from "./SingleStory";
const StoryContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  width: 90vw;
  margin: auto;
`;
const StoryContainerHeader = styled.div`
text-align: center;
color: rgb(68,68,68);
font-size: 22px;
`
export function SuccessStoriesContainer() {
  const [counter, setCounter] = useState(0);
  const length = 4;
  const stories = [
    {
      image:
        "https://kettocdn.gumlet.io/media/banner/0/79/image/d0ab9b0b9bcc30ced6574c54d6b216ab895f90d5.jpg",
      title: "Amit and the world's toughest cycling expedition",
      description:
        "Dr Amit Samarth will be racing at Trans Siberian Extreme. He is the First Indian to race Race Across America (5000 kms) in first attempt in 11 days 21 hrs 11 mins.Trans Siberian Extreme is Worlds's Longest Bicycle Stage Race held in Russia. The total distance for the race is 9100 kms, to be done in 15 stages over a period of 25 days. No Indian has ever participated in Trans Siberian Extreme Race.To race successfully at Trans Siberian Extreme, Amit Samarth needs to raise Rs 10,00,000 to meet the race expenses."
    },
    {
      image:
        "https://kettocdn.gumlet.io/media/banner/0/77/image/711a52ae35af5cf1c2dba2f5366a057eb2eb1ce9.png",
      title: "How Chennai Children's Choir Fulfilled Their Dream",
      description:
        "Our Chennai Children's Choir is flying to Washington DC this June. They will be performing at the famous Serenade International Choral Festival in Washington DC.We are mighty excited.The Serenade! Choral Festival,’ is the only summer festival of its kind in the US, the festival features professional and community choirs with a distinctly foreign flavor. It is a huge festival that has featured choirs from 25 countries and we are elated to be a part of this reputable mega event. The festival is scheduled between June 24th and July 5th. Chennai Children’s Choir comprises of children from the most disadvantaged backgrounds. Some are visually challenged and few with special needs.But we need a huge favour from you. For us to get 23 kids and their conductors to travel to the festival, we need to raise funds for Air travel, stay, food and local transport."
    },
    {
      image:
        "https://kettocdn.gumlet.io/media/banner/0/76/image/55647fe671a752a73be973498bcdee98a0fc797e.jpg",
      title: "How 6 year old Viraat overcame Cerebral Palsy",
      description:
        "I am a home maker from Mumbai, India and have a 5 year old son, Viraat who is diagnosed with Cerebral Palsy since birth. Cerebral Palsy is considered a neurological disorder caused by a non-progressive brain injury or malformation that occurs while the child’s brain is under development. Cerebral Palsy primarily affects body movement and muscle coordination. Viraat was a full term baby delivered via C – Section.  All my blood reports, sonographies and other reports were fine.  Neither did the water bag burst nor did I dilate. My due date was 23rd March 2012 and Viraat was born on 27th March 2012. My doctor delayed my delivery by 4 days.  I was induced pain on 27th March 2012 thrice but still I didn’t dilate.  I was then immediately taken for a C – section. At birth it was found that Viraat ate his own stool in the womb.  All necessary actions were taken at that time but he did not cry at all.  He was immediately taken to Surya Children’s Hospital where Dr. Avasthi (current pediatrician) was looking after the case. He was admitted in NICU in critical condition with problems of severe peroinatal asperyxia. Initially he was on life support ventilator and later brought down to oxygen and then completely off any respiratory mask. He was in NICU for 55 days."
    },

    {
      image:
        "https://kettocdn.gumlet.io/media/banner/0/75/image/15ae492e4210beb1247ed6cdfb30a0a3a50e7029.jpg",
      title: "How Surya Brought Internet Access To Ghazipur",
      description:
        "A survey was held in a school of 100 girl students in a remote corner of India, where the surveyor asked “if both you and your brother have to go to school and let’s assume there is some urgent work at home, who will be made to stay back?” Every single student in the class answered that they- the girl child would be asked to stay home. Probing further the surveyor asked if there were any exceptions, his only answer was stunned silence. This is true for most parts of India, both urban and rural included, the girl child bears the burden of more sacrifices as compared to the opposite sex.  A man named Surya Sen Singh has consciously decided to work towards altering this fact, his is a story of profound success amidst a life full of adversities and challenges. He now wishes to shine the same light on the bright minds of young students in his hometown encouraging both boys and girls to attend school and instilling the importance of education within his community."
    }
  ];

  const handleCounter = (value) => {
    if (value === 1) {
      if (counter === length - 1) {
        setCounter(0);
      } else {
        setCounter(counter + 1);
      }
    } else {
      if (counter === 0) {
        setCounter(length - 1);
      } else {
        setCounter(counter - 1);
      }
    }
    // console.log(counter);
  };
  return (
    <>
      <StoryContainerHeader>
        <div>
          <h1>Success Stories</h1>
        </div>
      </StoryContainerHeader>
      <StoryContainer>

        <i style={{
          width: "50px",
          height: "50px",
          fontSize: "40px",
          color: "#01bfbd"
        }} onClick={() => handleCounter(-1)} class="fas fa-chevron-left"></i>

        <SingleStory prop={stories[counter]} />
        {/* <Icon
          icon="dashicons:arrow-right-alt2"
          width="50px"
          height="50px"
          color="#01bfbd"
          onClick={() => handleCounter(1)}
        /> */}
        <i style={{
          width: "50px",
          height: "50px",
          fontSize: "40px",
          color: "#01bfbd"
        }} onClick={() => handleCounter(1)} class="fas fa-chevron-right"></i>

      </StoryContainer>
    </>
  );
}

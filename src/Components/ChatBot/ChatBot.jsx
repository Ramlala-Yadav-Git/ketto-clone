import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
const CHATBOT_THEME = {
  background: "#FFFEFC",
  fontFamily: "Roboto",
  headerBgColor: "#01bfbd",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#059693",
  botFontColor: "#fff",
  userBubbleColor: "#01bfbd",
  userFontColor: "#fff"
};
const BotRedirect = () => {
  // return (
  //   <Router>
  //     <div>
  //       <Link to="/browse">Form</Link>
  //     </div>

  //     <Switch>
  //       <Route exact path="/browse">
  //         <Browse />
  //       </Route>
  //     </Switch>
  //   </Router>
  // );
};
export const ChatBotHelper = () => {
  const steps = [
    {
      id: "1",
      message: "Hello!",
      trigger: "2"
    },
    {
      id: "2",
      message: "How can I help you?",
      trigger: "3"
    },
    {
      id: "3",
      options: [
        { value: 1, label: "Show categories", trigger: "4" },
        { value: 2, label: "Problem in payment", trigger: "5" },
        { value: 3, label: "Input", trigger: "12" }
      ]
    },
    {
      id: "4",
      options: [
        { value: 1, label: "Eduction", trigger: "6" },
        { value: 2, label: "Accident", trigger: "7" },
        { value: 3, label: "Women & girls", trigger: "8" },
        { value: 4, label: "Charity", trigger: "9" }
      ]
    },
    {
      id: "5",
      options: [
        {
          value: 1,
          label: "Money debited but payment not successful",
          trigger: "2"
        },
        { value: 2, label: "payment cancelled", trigger: "11" }
      ]
    },
    {
      id: "6",
      options: [
        {
          value: 1,
          label: "6a",
          trigger: "2"
        },
        { value: 2, label: "6b", trigger: "2" }
      ]
    },
    {
      id: "7",
      options: [
        {
          value: 1,
          label: "7a",
          trigger: "2"
        },
        { value: 2, label: "7b", trigger: "2" }
      ]
    },
    {
      id: "8",
      options: [
        {
          value: 1,
          label: "8a",
          trigger: "2"
        },
        { value: 2, label: "8b", trigger: "2" }
      ]
    },
    {
      id: "9",
      options: [
        {
          value: 1,
          label: "9a",
          trigger: "2"
        },
        { value: 2, label: "9b", trigger: "2" }
      ]
    },
    {
      id: "10",
      options: [
        {
          value: 1,
          label: "10a",
          trigger: "2"
        },
        { value: 2, label: "10b", trigger: "2" }
      ]
    },
    {
      id: "11",
      options: [
        {
          value: 1,
          label: "11a",
          trigger: "2"
        },
        { value: 2, label: "11b", trigger: "2" }
      ]
    },
    {
      id: "12",
      component: <BotRedirect />,
      trigger: "2"
    }
  ];

  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot steps={steps} floating={true} />
      </ThemeProvider>
    </>
  );
};

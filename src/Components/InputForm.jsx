import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
// npm install --save-dev @iconify/react @iconify-icons/bx
// import { Icon, InlineIcon } from "@iconify/react";
// import bxsUser from "@iconify-icons/bx/bxs-user";
const FormDiv = styled.div`
    width: 40%;
    margin: auto;
    position: absolute;
    border-radius: 20px;
    padding-top: 10px;
    left: 310px;
    top: 525px;
    
    & > form {
      background-color: #fff;
      border: 2px solid rgb(1,191,189);
      width: 95%;
      margin: auto;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      padding: 10px 15px;
      /* align-items: center;*/
      justify-content: center;

      & > h3 {
        border: none;
        border-bottom: 1px solid #aaa;
      }
      & > input,
      & > select {
        padding: 10px;
        border: 0;
        outline: 0;
        border-bottom: 2px solid #aaa;
        margin-bottom: 5px;
      }
      & > button {
        background-color: #01bfbd;
        color: #fff;
        font-weight: 600;
        padding: 15px;
        border: none;
        border-radius: 10px;
        margin-top: 10px;
      }
      & > p > a {
        text-decoration: none;
        color: #01bfbd;
      }
    }
    & > p {
      color: #fff;
      & > a {
        text-decoration: none;
        color: #01bfbd;
      }
    }
  `;
export function InputForm({ status }) {

  const [title, setTitle] = useState("");
  const [filePath, setFilePath] = useState("");
  const [url, setUrl] = useState("");
  const [, setEmail] = useState("");
  const [, setMobile] = useState("");
  const [amount, setAmount] = useState(0);
  const [days, setDays] = useState(0);
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault()
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUrl(reader.result);
      }
    };
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUrl(reader.result);
      }
    };
    reader.readAsDataURL(filePath);

    // console.log("filePath", filePath);
    //console.log("url", url);
    postData();
  };

  function postData() {
    let supporters = Math.floor(Math.random() * 10000);
    let progress = Math.floor(Math.random() * 101);
    let lastDonation = Math.floor(Math.random() * 30);
    let type = "";
    let raise = (amount)

    if (supporters > 1000) {
      type = "trending";
    } else {
      type = "taxBenefit";
    }
    if (url === "") {
      return;
    }
    const payLoad = {
      image: url,
      title: title,
      category: category,
      location: location,
      amount: raise,
      by: `by ${name}`,
      type: type,
      supporters: supporters,
      progress: progress,
      lastDonation: lastDonation,
      daysLeft: days,
    };
    axios.post("https://ketto-data.herokuapp.com/fundraiser", payLoad);
    /// console.log((payLoad));
  }

  const handleChange = (e) => {
    //  e.preventDefault()
    //console.log(e.target, e.target.name);
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "amount") {
      setAmount(e.target.value);
    } else if (e.target.name === "category") {
      setCategory(e.target.value);
    } else if (e.target.name === "mobile") {
      setMobile(e.target.value);
    } else if (e.target.name === "days") {
      setDays(e.target.value);
    } else if (e.target.name === "location") {
      setLocation(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "image") {
      setFilePath(e.target.files[0]);
    }
  };

  return (
    <FormDiv>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>Start your fundraiser</h3>
        <input
          type="file"
          name="image"
          placeholder="Image Url"
          onChange={handleChange}
        />
        <select name="category" onChange={handleChange}>
          <option value="category">Choose Category</option>
          <option value="education">Education</option>
          <option value="medical">Medical</option>
          <option value="women and girls">Women and Girls</option>
          <option value="animals">Animals</option>
        </select>
        <input
          type="text"
          name="title"
          // value={title}
          placeholder="Reason for fundraising..."
          onChange={handleChange}
        />

        <input
          type="text"
          name="name"
          // value={name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          // value={email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="mobile"
          // value={mobile}
          placeholder="Mobile"
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          onChange={handleChange}
        />
        <input
          type="number"
          name="days"
          placeholder="Days required"
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          // value={location}
          placeholder="location"
          onChange={handleChange}
        />
        <p>
          Already have an account?<a href="/">Login</a>{" "}
        </p>
        <button type="submit" >Create fundraiser </button>
      </form>
      <p>
        {/* Are you an NGO?<a href="/">Apply here</a> */}
      </p>
    </FormDiv>
  );
}

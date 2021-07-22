import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
// npm install --save-dev @iconify/react @iconify-icons/bx
//import { Icon, InlineIcon } from "@iconify/react";
//import bxsUser from "@iconify-icons/bx/bxs-user";

export function InputForm() {
  const FormDiv = styled.div`
    width: 100%;
    margin: auto;
    background: #333;
    & > form {
      background-color: #fff;
      width: 500px;
      margin: auto;
      border: 1px solid #333;
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
  const [title, setTitle] = useState("");
  const [filePath, setFilePath] = useState("");
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState(0);
  const [days, setDays] = useState(0);
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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

    console.log("filePath", filePath);
    console.log("url", url);
    postData();
  };

  function postData() {
    let supporters = Math.random() * 100000000;
    let progress = Math.random() * 101;
    let lastDonation = Math.random() * 30;
    let type = "";

    if (supporters > 1000) {
      type = "trending";
    } else {
      type = "taxBenefit";
    }
    if (url === "") {
      return;
    }
    const prop = {
      image: url,
      title: title,
      category: category,
      logo: url,
      location: location,
      amount: amount,
      by: `by ${name}`,
      type: type,
      supporters: supporters,
      progress: progress,
      lastDonation: lastDonation,
      daysLeft: days,
    };
    axios.post("http://localhost:3004/fundraiser", prop);
  }

  const handleChange = (e) => {
    console.log(e.target, e.target.name);
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
      <form onSubmit={handleSubmit}>
        <h3>Start your fundraiser</h3>
        <input
          type="file"
          name="image"
          placeholder="Image Url"
          onChange={handleChange}
        />
        <select name="category" onChange={handleChange}>
          <option value="education">Education</option>
          <option value="medical">Medical</option>
          <option value="women & girls">Women & Girls</option>
          <option value="animals">Animals</option>
        </select>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Reason"
          onChange={handleChange}
        />

        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="mobile"
          value={mobile}
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
          placeholder="Days requireed"
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          value={location}
          placeholder="location"
          onChange={handleChange}
        />
        <p>
          Already have an account?<a href="/">Login</a>{" "}
        </p>
        <button type="submit">Create fundraiser</button>
      </form>
      <p>
        Are you an NGO?<a href="/">Apply here</a>
      </p>
    </FormDiv>
  );
}

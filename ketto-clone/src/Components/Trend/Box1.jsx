import React, { useState,useEffect } from "react";
import styles from "./Trend.module.css";
import { Comments } from "./Comments";
import axios from "axios";
import { Formdata } from "./FormData";
import { Contactform } from "./Contform";



export const Box1 = (props) => {

  const [modal, Setmodal] = useState(false);

  const [cont, Setcont] = useState(false);

  const [modalplus, Setmodalplus] = useState(false);

  const [contri, Setcontri] = useState(false);


  // ------------------form
  const [formData,setFormData] = useState({})
  const [formDatacont,setFormDatacont] = useState({})


  const [list,setList]=useState([])

  const [listcont,setListcont]=useState([])


  

  //------------------------- form


  useEffect(() => {
   
    getTodos();
    getTodoscont();

}, []);


// input function
    const handleOnchange =(e)=>{
    const img="https://picsum.photos/200/300"

        const {name,value}=e.target
   
        setFormData({...formData, [name]:value,img:img})


    }

    //contact logic
    const handleOnchangecont =(e)=>{
      const img="https://picsum.photos/200/300"
  
          const {name,value}=e.target
     
          setFormDatacont({...formDatacont, [name]:value,img:img})

      }


    // 


//price
const handleprice=()=>{

}

//submit
    const handleSubmit=(e)=>{
        
      e.preventDefault()
      // console.log(formData)
      // setHandle(true)
 
  }

  const handleSubmitcont=(e)=>{
        
    e.preventDefault()
    // console.log(formDatacont)
    // setHandle(true)

}



  //--------------------- getdata--------------------
  //getting data here

  const getTodos = async () => {
    try {
    const url= `http://localhost:3001/todos`;

      const  data  = await axios.get(url);
      const result= data.data
     
      // console.log(result)
     
      setList(result);
    // console.log(data)
    } catch (err) {
    console.log(err);
    }
  };




  

  //--------------------- getdata cont--------------------
  //getting data here

  const getTodoscont = async () => {
    try {
    const url= `http://localhost:3001/cont`;

      const  data1  = await axios.get(url);
      const result1= data1.data
     
      // console.log(result1)
     
      setListcont(result1);
    // console.log(data)
    } catch (err) {
    console.log(err);
    }
  };



  


  //------------------------- post data----------

 //posting data here
 const postdata=()=>{
  axios
  .post("http://localhost:3001/todos", formData )
  .then((res) => {
      // console.log(res)

   getTodos();
  })
  .catch((err) => {
    console.log(err);
  });
}




  //------------------------- post data contact----------

 //posting data here
 const postdatacont=()=>{
  axios
  .post("http://localhost:3001/cont", formDatacont )
  .then((res) => {
      // console.log(res)

   getTodoscont();
  })
  .catch((err) => {
    console.log(err);
  });
}



// -------------------------model-------------------
  const togglemodal = () => {
    Setmodal(!modal);
  };
  const toggleplus = () => {
    Setmodalplus(!modalplus);
  };
  const togglecontribute = () => {
    Setcontri(!contri);
  };
  const togglecontact = () => {
    Setcont(!cont);
  };
// ------------------form---------------------



  return (
    <>
      {/* ---------------------------------left portion--------------------------- */}
      <div className={styles.Box1}>
        <i style={{color:"#c1282d",marginTop:"5px",marginLeft:"10px",fontWeight:"bold"}} class="fas fa-bug"></i>
          <p>This fundraiser is in an urgent need of funds</p> 
      </div>

      <h1 className={styles.h1box1}>{props.h1}</h1>

      <div>
        <div className={styles.boss}>
         
          {/* left */}
         
          <div className={styles.left}>
            <img src={props.imgsrc} alt="loading" />
            <div>
             
              <button onClick={togglemodal} className={styles.sharewhatsapp}>
                <i class="fas fa-share-alt"></i> Share the Fundraiser
              </button>

              {modal && (
                <>
                  {/* <div className={styles.modal}> */}

                  <div className={styles.modalcontent}>
                    <p>
                      <i class="fab fa-whatsapp-square"></i> Whatsapp
                    </p>
                    <p>
                      <i class="fab fa-twitter"></i> Twitter
                    </p>
                    <p>
                      <i class="fab fa-facebook-square"></i> Facebook
                    </p>
                    <p>
                      <i class="fab fa-linkedin"></i> LinkdIn
                    </p>
                    <p>
                      <i class="fab fa-google"></i> Mail{" "}
                    </p>

                    {/* <button onClick={togglemodal} className={styles.btnmodal}>
                      close
                    </button> */}
                  </div>
                </>
              )}

              {/* <Model showmodel={showmodel} setshowmodel={setshowmodel}/> */}
            </div>

            <div>
              <Comments />
              

            </div>
          </div>

          {/* right */}
        
          {/* ------------------------------------------contribute ---------------------------------------*/}
          <div className={styles.right}>
            <button onClick={togglecontribute} className={styles.contribute}>
              <i class="far fa-heart"> CONTRIBUTE NOW</i>
            </button>
           
           
            {contri && (
              <div className={styles.contributepop}>
                <div className={styles.contributepop1}>
                  <p>
                    <i class="fas fa-chevron-left"></i>
                  </p>
                  <p>Choose a donation amount</p>
                  <button>
                    ₹<i class="fas fa-sort-down"></i>
                  </button>
                </div>
                <div className={styles.contributepopbutton}>
                  <p>Most Donors donate approx ₹1500 to this Fundaraiser</p>
                  <button onClick={handleprice}>₹1000</button>
                  <button onClick={handleprice}>₹1500</button>
                  <button onClick={handleprice}>₹4500</button>

                  

                </div>
                <div className={styles.contributepopbutton1}>
                  <button className={styles.otherbtn}>Other Amount</button>
                </div>
                {/*--------------------------------------------------- form ----------------------------------*/}
                
                <div className={styles.form}>
            
            <form onSubmit={handleSubmit} >
                  <div className={styles.input1}>
                    <input onChange={handleOnchange}  type="text" placeholder="Name " name="title" />
                    <i class="fas fa-user"></i>
                  </div>

                  <div className={styles.input2}>
                    <input onChange={handleOnchange}  type="text" placeholder=" Email Id" name="email" />
                    <i class="fas fa-envelope"></i>
                  </div>

                  <div className={styles.input3}>
                    <input onChange={handleOnchange}  type="phone" placeholder=" Your Mobile Number" name="phone" />
                    <i class="fas fa-phone-alt"></i>
                  </div>

                  <p>All Payment updates will be sent on this number.</p>

                  <div className={styles.inputbtn}>
                    <div>
                      <input
                      onChange={handleOnchange} 
                        type="radio"
                        id="html"
                        name="country"
                        value="HTML"
                      />

                      <p>I am an Indian National</p>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="html"
                        name="country"
                        value="HTML"
                      />

                      <p>I am not an Indian National</p>
                    </div>
                  </div>
                  <div className={styles.inputbtn1}>
                    <button onClick={postdata} type="submit" class="submit">
                      Proceed ToPay{" "}
                    </button>
                    <p>
                      By continuing, you agree to our Terms of Service and
                      Privacy Policy
                    </p>
                  </div>
              </form>

                </div>
              </div>

            )}

            {/* --------------------------------------contribute close-------------------------------- */}


            {/*-------------------------------------------------- credit--------------------------- */}
            <div className={styles.btn}>
              <button onClick={togglecontribute}>
                <i class="fas fa-credit-card"></i> All credits & tails
              </button>
              <button onClick={togglecontribute}>
                <i class="fas fa-globe"></i> Net Banking
              </button>
              <button>
                <i class="fab fa-google-pay"></i> Patym UPI
              </button>
              <button onClick={togglecontribute}>
                <i class="fas fa-rupee-sign"></i> Direct Bank Transfer
              </button>
            </div>

              <button className={styles.share1}>
                <i class="fab fa-facebook-square"> Spread the world</i>
              </button>

              <p className={styles.socialmediap}>Every Social media share can bring ₹5000</p>
              <p className={styles.socialmediaprice}>{props.price}</p>           
               
               <div className={styles.para}>
                 <div className={styles.raised}>
                 <p> raised out of </p> 
                 <p>{props.reduce}</p> 
                 <p> goals</p>

                 </div>
          
               <div>

                <progress
                  className={styles.progressbox1}
                  value="70"
                  max="100"
                />

                <div className={styles.parasupporter}>
                 <div className={styles.support}>
                 <p>{props.supporter}</p>
                   <p>supporter</p>
                 </div>
                 
                <div  className={styles.support1}>
                <p>{props.daysleft}</p> 
                  <p>days left</p>
                </div>
                 
                </div>
              </div>
              {/*----------------------------------------- campaginer form *-----------------------------*/}

              {cont && (
        <>
        <div className={styles.contactpop}>
         {/* <div> */}
          <p>Contact Rachit Shrivastava</p>

          <p> Your message will be directly emailed 
              to Rachit Shrivastava and you will receives 
              his/her response on the email address listed on Ketto.
        </p>
  <form onSubmit={handleSubmitcont}> 
  
   <div className={styles.contactinputparent}>


        <div className={styles.contactinput12}>
            <input onChange={handleOnchangecont} className={styles.input2con} type="text" name="title1"  placeholder="Name" />
            <input onChange={handleOnchangecont} className={styles.input2con} type="text" name="email"  placeholder="Email address" />
        </div>
        
        <br />

        <div className={styles.contactinput3}>
        < textarea onChange={handleOnchangecont} type="text" placeholder="Enter the  message" name="message" />

        </div>

        <div className={styles.btncon} >
        <button onClick={postdatacont}  className={styles.contactinputparentbutton}>Send</button>
        </div>
        </div>
    </form>


        </div>

        </>
      )

      }
      {/* ---------------------------------------------------------------------------------- */}


           <div className={styles.campaignerbox1}>
                <button onClick={togglecontact} style={{ color: "#3b5998", fontWeight: "400px" }}>
                  <i class="far fa-envelope"></i> Contact
                </button>

              {/* modal for contact */}

    


                <div className={styles.box1proimg1}>
                  <div profilebox1div>
                  <img  className={styles.profilebox1} height="50px" src={props.profilebox1} alt="loading" />

                  </div>
                  <div className={styles.box1protext}>
                    <p style={{ height:"10px",color:"grey",fontWeight:"bold" }}>campaigner</p>
                    <p style={{ color: "#3b5998", fontWeight: "400px",height:"10px" }}>
                      {props.campaignername}
                    </p>
                    <p style={{ height:"10px",color:"grey" }}>
                      <i class="fas fa-map-marker-alt"></i>
                      {props.campaignercity}
                    </p>
                  </div>
           </div>

                <div className={styles.box1proimg11}>
                  <img className={styles.profilebox1} height="45px" src={props.profilebox11} alt="loading" />
                  <div className={styles.box1protext}>
                    <p  style={{ height:"10px",color:"grey",fontWeight:"bold" }}>campaigner</p>
                    <p style={{ color: "#3b5998", fontWeight: "400px",height:"10px"  }}>
                      {props.campaignername1}
                    </p>
                    <p>
                      <i class="fas fa-map-marker-alt"></i>
                      {props.campaignercity1}
                    </p>

                  </div>

                </div>


{/* //displaying for contact */}

<div>
          

          {/* ----------------------input have to add here--------------- */}
                         
                          <div >
          
                            {listcont.map((item)=>{
                              // console.log("itemcont=",item)
                              return <Contactform  key={item.id} data1={item}/>
                            })}
                          </div>
          
          
          
          {/* ----------------------------------------------------------- */}


</div>


              </div>

              {/* -------------------------------------------fundrasing---------------------------------- */}
              <div className={styles.Fundraising}>
                 <i style={{ color: "grey", }} class="fab fa-rust"></i>
                  <h3>

                  Fundraising Team
                </h3>
                 </div>
                  

              <div className={styles.plus}>
                <div className={styles.Fundraisgplus}>
                  <i
                    onClick={toggleplus}
                    style={{ color: "#01bfbd", padding: "15px " }}
                    class="fas fa-plus"
                  ></i>
                </div>
                {modalplus && (
                  //  <div className={styles.modalplus}>

                  //  <div classame={styles.overlayplus}>
                  <>
                    <div className={styles.modalcontentplus}>
                      <p>Login</p>

                      <div className={styles.plussign}>
                        <div className={styles.pluschildleft}>
                          <input
                            type="text"
                            placeholder="Email/Mobile Number"
                            required=""
                          />
                          <br />
                          <button>Get otp</button>

                          <p style={{ color: "#01bfbd" }}>Login via Password</p>
                          <p>
                            By continuing you agree to our Terms of Service and
                            Privacy Policy
                          </p>

                          <p>
                            {" "}
                            Want to start a fundraiser?
                            <p style={{ color: "#01bfbd" }}> Click here</p>
                          </p>
                        </div>

                        <div className={styles.pluschildright}>
                          <button>
                            <i class="fab fa-google"> Sign in with Google</i>
                          </button>
                          <button>
                            <i class="fab fa-facebook-square">
                              {" "}
                              Continue with Facebook
                            </i>{" "}
                          </button>
                        </div>
                      </div>

                      <button onClick={toggleplus} className={styles.btnmodal}>
                      <i class="fas fa-times"></i>
                      </button>
                    </div>

                    {/* </div> */}

                    {/* </div> */}
                  </>
                )}

                <h3
                  style={{
                    color: "#01bfbd",
                    marginLeft: "10px",
                    marginTop: "5px",
                    fontSize: "15px",
                  }}
                >
                  Start a Supporting Fundraiser
                </h3>
                <i
                  style={{
                    marginTop: "10px",
                    marginLeft: "20px",
                    color: "#01bfbd",
                  }}
                  class="fas fa-chevron-right"
                ></i>
              </div>

              {/*-------------------------------------- top donar--------------------------------------- */}

              <div className={styles.Fundraising}>
                <h3>
                  <i style={{ color: "gray" }} class="fas fa-trophy"></i> Top
                  Donors
                </h3>
              </div>
              <br />
          <div className={styles.donar}>
          
               
          

                 

 
{/* ----------------------input have to add here--------------- */}
               
                <div className={styles.donar3}>

                  {list.map((item)=>{
                    // console.log("item=",item)
                    return <Formdata  key={item.id} data={item}/>
                  })}
                </div>



{/* ----------------------------------------------------------- */}

                <div className={styles.showmore}>
                  <p>
                    Show more <i class="fas fa-chevron-down"></i>
                  </p>
                </div>
              </div>

              {/* ---------------------------------------most raised social sharing------------------------ */}
              <div className={styles.Fundraising}>
                  <i
                    style={{ color: "gray" }}
                    class="fas fa-volume-up"
                  ></i>
               <p style={{fontSize:"15px",fontWeight:"bolder"}} >
                  Most Raised from Social Sharing
                </p>
                </div>
              <br />
              <div className={styles.donar}>
                <div className={styles.donar1}>
                  <p>{props.sortnamesocial}</p>
                  <p>{props.namesocial}</p>
                  <p>{props.costsocial}</p>
                </div>

                <div className={styles.donar2}>
                  <p>{props.sortnamesocial1}</p>
                  <p>{props.namesocial1}</p>
                  <p>{props.costsocial1}</p>
                </div>

                <div className={styles.showmore}>
                  <p>
                    Show more <i class="fas fa-chevron-down"></i>
                  </p>
                </div>
              </div>

              {/* ---------------------------------------supporters------------------------------------------- */}

              <div className={styles.Fundraising}>
                  <i style={{ color: "gray" }} class="fas fa-users">
                  </i>
                  <h3>

                  {props.supportersocial} Supporters
                </h3>
              </div>
              <br />

              <div className={styles.donarsupporter}>
                <div className={styles.supporterdonated}>
                  <p>DONATED VIA BANK / PAYTM / UPI ?</p>
                  <p>
                    <a href="">Click here</a> if you can't find your donation{" "}
                    <br /> listed below.
                  </p>
                </div>
                <div className={styles.generous}>
                  <p>Most Generous</p>
                  <p>|</p>
                  <p>Recent</p>
                </div>

                <div className={styles.donar2}>
                  <p>{props.sortnamesocial2}</p>
                  <p>{props.namesocial2}</p>
                  <p>{props.costsocial2}</p>
                </div>

                <div className={styles.donar2}>
                  <p>{props.sortnamesocial3}</p>
                  <p>{props.namesocial3}</p>
                  <p>{props.costsocial3}</p>
                </div>

                <div className={styles.donar2}>
                  <p>
                    <i style={{ color: "gray" }} class="fas fa-user"></i>{" "}
                  </p>
                  <p>{props.namesocial4}</p>
                  <p>{props.costsocial4}</p>
                </div>

                <div className={styles.donar2}>
                  <p>
                    <i style={{ color: "gray" }} class="fas fa-user"></i>
                  </p>
                  <p>{props.namesocial5}</p>
                  <p>{props.costsocial5}</p>
                </div>

                <div className={styles.leftright}>
                  <p>
                    <i class="fas fa-chevron-left"></i>1 - 5 of 4799 donations
                    Have <i class="fas fa-chevron-right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box1;

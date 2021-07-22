import React from "react";
import styles from "./Trend.module.css";

export const Box1 = (props) => {
  return (
    <>
      <div className={styles.Box1}>
        <i class="fas fa-bug">   This fundraiser is in an urgent need of funds</i>
      </div>
      <h1 className={styles.h1box1}>{props.h1}</h1>

      <div>

        <div className={styles.boss}>
          <div className={styles.left}>
            <img src={props.imgsrc} alt="loading" />
            <button className={styles.sharewhatsapp}> <i class="fas fa-share-alt"></i>   Share the Fundraiser</button>

          </div>

          <div className={styles.right}>
            <button className={styles.contribute}>
              <i class="far fa-heart">  CONTRIBUTE NOW</i>
            </button>
            <div className={styles.btn}>
              <button>
                <i class="fas fa-credit-card"></i> All credits & tails
              </button>
              <button><i class="fas fa-globe"></i> Net Banking</button>
              <button>
                <i class="fab fa-google-pay"></i> Patym UPI
              </button>
              <button>
                <i class="fas fa-rupee-sign"></i> Direct Bank Transfer
              </button>
            </div>
            <div className={styles.para}>
              <button className={styles.share1}>
                <i class="fab fa-facebook-square">   Spread the world</i>
              </button>

              <p>Every Social media share can bring ₹5000</p>
              <p>{props.price}</p>

              <p> raised out of {props.reduce}goals</p>
              <div>
                <progress
                  className={styles.progressbox1}
                  value="70"
                  max="100"
                />

                <div  className={styles.parasupporter}   >
                <p>{props.supporter} supporter</p>
                <p>{props.daysleft}days left</p>
                </div>
                
              </div>

        <div className={styles.campaignerbox1}>
          <p style={{color:"#3b5998",fontWeight:"400px"}}><i class="far fa-envelope"></i> Contact</p>
         
          <div className={styles.box1proimg1}>
            <img height="50px" src={props.profilebox1} alt="loading" />
            <div className={styles.box1protext} >
            <p>campaigner</p>
            <p style={{color:"#3b5998",fontWeight:"400px"}}>{props.campaignername}</p>
            <p> <i class="fas fa-map-marker-alt"></i> {props.campaignercity}</p>
            </div>
          </div>

           <div className={styles.box1proimg11}>
            <img height="50px" src={props.profilebox11} alt="loading" />
            <div className={styles.box1protext} >
            <p>campaigner</p>
            <p style={{color:"#3b5998",fontWeight:"400px"}}>{props.campaignername1}</p>
            <p> <i class="fas fa-map-marker-alt"></i> {props.campaignercity1}</p>
            </div>
          </div>
          
        </div>


        <div className={styles.Fundraising }>
          <h3> <i  style={{color:"grey"}} class="fab fa-rust"></i>  Fundraising Team</h3>
        </div>
      <div className={styles.plus}>
        <div className={styles.Fundraisgplus }>
        <i style={{color:"#01bfbd",padding:"15px "}} class="fas fa-plus"></i>
        </div>
        <h3 style={{color:"#01bfbd", marginLeft:"10px",marginTop:"5px",fontSize:"18px"}}>Start a Supporting Fundraiser</h3>
        <i style={{marginTop:"10px" ,marginLeft:"20px",color:"#01bfbd"}} class="fas fa-chevron-right"></i>
        </div>




        <div className={styles.Fundraising }>
          <h3> <i style={{color:"gray"}} class="fas fa-trophy"></i> Top Donors</h3>
        </div>

       <div className={styles.donar}>
         <div className={styles.donar1}>
           <p>{props.sortname}</p>
           <p>{props.name}</p>
           <p>{props.cost}</p>
         </div>

       <div className={styles.donar2} >
           <p>{props.sortname1}</p>
           <p>{props.name1}</p>
           <p>{props.cost1}</p>
         </div>

      <div className={styles.showmore} >
        <p >Show more <i class="fas fa-chevron-down"></i></p>
      </div>
         </div>


         <div className={styles.Fundraising }>
          <h3> <i style={{color:"gray"}} class="fas fa-volume-up"></i> Most Raised from Social Sharing</h3>
        </div>
       <div className={styles.donar}>
         <div className={styles.donar1}>
           <p>{props.sortnamesocial}</p>
           <p>{props.namesocial}</p>
           <p>{props.costsocial}</p>
         </div>

       <div className={styles.donar2} >
           <p>{props.sortnamesocial1}</p>
           <p>{props.namesocial1}</p>
           <p>{props.costsocial1}</p>
         </div>

      <div className={styles.showmore} >
        <p >Show more <i class="fas fa-chevron-down"></i></p>
      </div>
         </div>
         


         <div className={styles.Fundraising }>
          <h3> <i style={{color:"gray"}} class="fas fa-users"> </i> {props.supportersocial} Supporters</h3>
        </div>

      <div className={styles.donarsupporter}>
       <div className={styles.supporterdonated}>
      <p>
          DONATED VIA BANK / PAYTM / UPI ?</p>
       <p> <a href="">Click here</a>  if you can't find your donation  <br /> listed below.
      </p>

    </div>
    <div className={styles.generous}>
      <p>Most Generous</p>
      <p>|</p>
      <p>Recent</p>
    </div>
{/* 
         <div className={styles.donar1}>
           <p>{props.sortnamesocial}</p>
           <p>{props.namesocial}</p>
           <p>{props.costsocial}</p>
         </div>

       <div className={styles.donar2} >
           <p>{props.sortnamesocial1}</p>
           <p>{props.namesocial1}</p>
           <p>{props.costsocial1}</p>
         </div> */}

         <div className={styles.donar2} >
           <p>{props.sortnamesocial2}</p>
           <p>{props.namesocial2}</p>
           <p>{props.costsocial2}</p>
         </div>

         <div className={styles.donar2} >
           <p>{props.sortnamesocial3}</p>
           <p>{props.namesocial3}</p>
           <p>{props.costsocial3}</p>
         </div>

         <div className={styles.donar2} >
          <p>
          <i style={{color:"gray"}} class="fas fa-user"></i>           </p>
           <p>{props.namesocial4}</p>
           <p>{props.costsocial4}</p>
         </div>


         <div className={styles.donar2} >
          <p>
          <i style={{color:"gray"}}class="fas fa-user"></i>           </p>
           <p>{props.namesocial5}</p>
           <p>{props.costsocial5}</p>
         </div>

      <div className={styles.leftright} >
        <p>  <i class="fas fa-chevron-left"></i>1 - 5 of 4799 donations Have <i class="fas fa-chevron-right"></i></p>
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

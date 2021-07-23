import React from "react"
import styles from "./Trend.module.css"
import Box1 from "./Box1"
const Box1data=()=>{
    return(
        <>
         <div className={styles.box1data}>
            <Box1   
         
         h1={"Wife Fears She Will Lose The Father Of Their 2-Year-Old Daughter To Brain Haemorrhage. Please Help."}

            imgsrc={
                "https://kettocdn.gumlet.io/media/campaign/167000/167947/image/57beaf6d360986134ecdbd89657dd6a2b901a548.jpg?w=750&dpr=1.0"
                }

            price={"₹ 81,33,415"}
            
            reduce={"900000"}
            supporter={"47788"}
            daysleft={80}
           
            profilebox1={"https://kettocdn.gumlet.io/media/individual/1358000/1358229/image/5e58e4fc7b807.jpg?w=300&dpr=1.0"}        
            campaignername={"Rachit Shrivastava"}
            campaignercity={"pune"}
        
            profilebox11={"data:image/jpeg;base64,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"}        
            campaignername1={"Rohit Sharma"}
            campaignercity1={"Friend"}
            
            sortname={"Mb"}
            name={" Mrunal Bhatt"}
            cost={"₹ 1,00,000"}

            sortname1={"RP"}
            name1={"  Rajesh P. Manghani"}
            cost1={"$ 1,35"}
            
            sortnamesocial={"AB"}
            namesocial={"Abhijeet Sawant"}
            costsocial={"₹ 82,700"}
           
            sortnamesocial1={"A"}
            namesocial1={"Ayush"}
            costsocial1={"₹ 47,891"}

            sortnamesocial2={"Mb"}
            namesocial2={"Mrunal Bhatt"}
            costsocial2={"₹ 1,00,000"}

            sortnamesocial3={"Rp"}
            namesocial3={"Rajesh P. Manghani"}
            costsocial3={"$ 1,35"}

            namesocial4={"Well Wisher"}
            costsocial4={"AED 5,000"}
         
            namesocial5={"Well Wisher"}
            costsocial5={"AED 5,000"}
         
            arrowimg={""}
            arrowtext={"I could really use your help right now.You can help me with a contribution as small as ₹ 300"}

            imgupdate={"https://kettocdn.gumlet.io/media/individual/4664000/4664514/image/09a17c749b8cb60daa00813d9325fa76f6b0296b.jpg?w=50&dpr=1.0"}
             emailupdate={"rajpal@gmail.com"}
            bodyupdate={"My mother is suffering from breast cancer we need to give her T-dm1(Medecine) which cost is too high, I don't want to loose her,Please help us to overcome this situation,Please remove @ in the link to donate :- [ket.@to/my-mother-is-fighting-for-her-life-and-we-need-your-support-to-save-her-345438] Or            search Alka Mishra on ketto to donate "}
    />
    

         </div>
        </>
    )
}
export {Box1data}
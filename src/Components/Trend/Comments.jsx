import React, { useEffect, useState } from 'react'
import styles from "./Trend.module.css";


const Comments = () => {

    const [users, Setusers] = useState([])
    const [mydetails, setMydetails] = useState(true)
    const [update, setupdate] = useState(false)
    const [doc, setdoc] = useState(false)
    const [about1, setabout] = useState(false)







    const getUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        Setusers(await res.json())
        //    console.log(res)

    }
    useEffect(() => {

        getUsers()
    }, [])


    const handledetails = () => {
        setMydetails(!mydetails)
        setupdate(false)
        setdoc(false)
        setabout(false)



    }
    const handledeupdata = () => {
        setupdate(!update)
        setMydetails(false)
        setdoc(false)
        setabout(false)

    }

    const handlededocument = () => {
        setdoc(!doc)
        setMydetails(false)
        setupdate(false)
        setabout(false)


    }
    const handledeabout = () => {
        setabout(!about1)
        setdoc(false)
        setMydetails(false)
        setupdate(false)


    }



    return (

        <div className={styles.apiContainer}>
            <div className={styles.left1}>
                <p onClick={() => handledeabout()}> <i style={{ color: "#01bfbd" }} className="fas fa-globe"></i>  About</p>
                <p onClick={() => handlededocument()}> <i className="far fa-file-alt"></i> Documents</p>
                <p onClick={() => handledeupdata()}>
                    <i className="fas fa-history"></i>  Updates</p>

                <p onClick={() => handledetails()}>
                    <i style={{ color: "grey" }} className="fas fa-comment"></i>
                    Comments</p>


            </div>
            <div className={styles.inputget}>
                <input type="text" placeholder="write something" />
                <button >POST</button>

            </div>

            <div className={styles.displayitem}>


                {mydetails &&
                    users.map((item, i) => {
                        if (i > 5) {
                            return "";
                        }

                        const com = "https://picsum.photos/200/300"


                        return (

                            <>
                                <div className={styles.designheadget} key={item.id} >

                                    <div className={styles.getimg}>
                                        <img height="50px" width="50px" src={com} alt="" />
                                    </div>
                                    <div className={styles.apiget}>
                                        {item.email}
                                        <div className={styles.bodyget}>
                                            {item.body}

                                        </div>
                                    </div>
                                </div>





                            </>


                        )

                    })

                }







                {/*------------------------------- document */}

                {doc &&
                    <div>
                        <h3 style={{ textAlign: "center", fontFamily: "sans-serif", marginTop: "-10px" }}>Documents</h3>
                        {

                            users.map((item, i) => {
                                if (i > 0) {
                                    return ""
                                }
                                return (

                                    <>
                                        <div className={styles.designheadget} key={item.id} >

                                            <div className={styles.getdoc}>
                                                <img src="https://kettocdn.gumlet.io/media/campaign/167000/167947/image/5e60cd208b52f.png?w=750&dpr=1.0" alt="" />

                                                <img src="https://kettocdn.gumlet.io/media/campaign/167000/167947/image/5e60cd208b52f.png?w=750&dpr=1.0" alt="" />

                                            </div>


                                        </div>

                                    </>


                                )





                            })

                        }
                    </div>

                }


                {/*------------------------------------------------------------ about */}


                {about1 &&


                    <div>
                        <h3 style={{ textAlign: "center", fontFamily: "sans-serif" }}>About the Fundraiser</h3>
                        {

                            users.map((item, i) => {
                                if (i > 5) {
                                    return "";
                                }
                                return (

                                    <>
                                        {/* <div className={styles.designheadget}> */}


                                        <div className={styles.aboutget} key={item.id} >
                                            {item.body}


                                        </div>
                                        {/* </div> */}






                                    </>


                                )

                            })
                        }


                    </div>

                }

                {/*---------------------------- update------------------------ */}
                {update &&

                    <div>
                        <h3 style={{ textAlign: "center", fontFamily: "sans-serif", marginTop: "-10px" }}>Thank You For Your Support!</h3>
                        {


                            users.map((item, i) => {
                                if (i > 5) {
                                    return
                                }
                                return (

                                    <>
                                        <div className={styles.designheadget} key={item.id}>

                                            <div className={styles.getimgupdate1}>

                                                <img src="https://picsum.photos/200/300" alt="" />
                                            </div>
                                            <div className={styles.apiget}>
                                                <div className={styles.bodyget}>
                                                    {item.body}

                                                </div>
                                            </div>
                                        </div>





                                    </>



                                )

                            })
                        }
                    </div>

                }





            </div>
        </div>






    )
}

export { Comments }
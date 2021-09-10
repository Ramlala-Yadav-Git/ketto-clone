import { Link } from "react-router-dom";
import { NavParent, KetoIcon, LeftItems, RightItems, DropDown, WhatappIcon, SearchIcon, Fundraiser } from "../../StyledComponents/NavBar/NavParent";
import styles from "../NavBar/NavBar.module.css";
import stylesp from "../NavBar/Profile.module.css"
import { Profile } from "./Profile";
export function NavBar({ user }) {


    let st = JSON.parse(localStorage.getItem("user"))
    var u;
    if (st) {
        u = st.email;

    }

    //console.log(user);
    return (
        <><NavParent>
            <LeftItems>
                <div>
                    <KetoIcon>
                        <Link to="/">
                            <div >
                                <img src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?w=70&dpr=1.0" alt="Keto_logo" />
                            </div>
                        </Link>
                    </KetoIcon>

                    <div >
                        <Link to="/browse">Browse Fundraisers</Link>
                    </div>

                    <div>
                        <DropDown>
                            <div className={styles.parent}>
                                <span> Fundraise For</span>
                            </div>
                            <div id={styles.hidden} >

                                <Link to="/browse">
                                    <p  >Medical Treatment</p>
                                    <p  >NGO / Charity</p>
                                    <p >Other Cause</p>

                                </Link>



                            </div>
                            <div>
                                {/* <img src="https://pics.freeicons.io/uploads/icons/png/20305395141540882611-512.png" alt="DropDown-Icon" /> */}
                                <i className="fas fa-caret-down"></i>

                            </div>
                        </DropDown>
                    </div>
                    <div>
                        <Link to="/howitworks">
                            How It Works
                        </Link>

                    </div>

                    <div>
                        |
                    </div>
                    <SearchIcon >
                        <div>
                            <div className={styles.searchIconNav}>
                                <i class="fas fa-search"></i>
                            </div>
                            <div>
                                <span>Search</span>
                            </div>
                        </div>
                    </SearchIcon >
                </div>
            </LeftItems>
            <RightItems>
                <div>
                    <WhatappIcon>
                        <div>
                            <div>
                                <img src="https://pngimg.com/uploads/whatsapp/whatsapp_PNG95154.png" alt="WhatsApp Icon" />
                            </div>
                            <div>
                                <span>Chat</span>
                            </div>
                        </div>
                    </WhatappIcon>
                    <Fundraiser>
                        <div>
                            <Link to="/browse">
                                Start a Fundraiser
                            </Link>

                        </div>
                    </Fundraiser>
                    {
                        user ?
                            <div className={stylesp.profile}>
                                <Profile name={u} />
                            </div> :
                            <div>
                                <Link to="/login">
                                    Sign in

                                </Link>
                            </div>
                    }



                </div>
            </RightItems>
        </NavParent>
        </>
    )
}
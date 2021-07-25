import { NavParent, KetoIcon, LeftItems, RightItems, Icons, DropDown, WhatappIcon, SearchIcon, Fundraiser } from "../../StyledComponents/NavBar/NavParent";
import styles from "../NavBar/NavBar.module.css";
import stylesp from "../NavBar/Profile.module.css"
import { Profile } from "./Profile";
export function NavBar({ user }) {
    const HandleClick = () => {
        document.location.href = "http://localhost:3000"
    }
    const HandleBrowse = () => {
        document.location.href = "http://localhost:3000/browse"

    }
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
                        <div onClick={() => HandleClick()}>
                            <img src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?w=70&dpr=1.0" alt="Keto_logo" />
                        </div>
                    </KetoIcon>

                    <div onClick={() => HandleClick()} >
                        <a href="/browse"> Browse Fundraisers</a>
                    </div>

                    <div>
                        <DropDown>
                            <div className={styles.parent}>
                                <span> Fundraise For</span>
                            </div>
                            <div id={styles.hidden} >

                                <p onClick={() => { HandleBrowse() }} >Medical Treatment</p>
                                <p onClick={() => { HandleBrowse() }} >NGO / Charity</p>
                                <p onClick={() => { HandleBrowse() }}>Other Cause</p>



                            </div>
                            <div>
                                <img src="https://pics.freeicons.io/uploads/icons/png/20305395141540882611-512.png" alt="DropDown-Icon" />

                            </div>
                        </DropDown>
                    </div>
                    <div>
                        <a href="http://localhost:3000/howitworks"> How It Works</a>
                    </div>

                    <div>
                        |
                    </div>
                    <SearchIcon >
                        <div>
                            <div>
                                <img src="https://cdn.icon-icons.com/icons2/2566/PNG/512/search_icon_153438.png" alt="SearchIcon" />
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
                            <a href="/browse">Start a Fundraiser</a>
                        </div>
                    </Fundraiser>
                    {
                        user ?
                            <div className={stylesp.profile}>
                                <Profile name={u} />
                            </div> :
                            <div>
                                <a href="/login">Sign in</a>
                            </div>
                    }



                </div>
            </RightItems>
        </NavParent>
        </>
    )
}
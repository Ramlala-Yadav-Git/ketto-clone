import { NavParent, KetoIcon, LeftItems, RightItems, Icons, DropDown, WhatappIcon, SearchIcon, Fundraiser } from "../../StyledComponents/NavBar/NavParent";


export function NavBar() {

    return (
        <><NavParent>
            <LeftItems>
                <div>
                    <KetoIcon>
                        <div>
                            <img src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?w=70&dpr=1.0" alt="Keto_logo" />
                        </div>
                    </KetoIcon>

                    <div>
                        <a href="!#"> Browse Fundraisers</a>
                    </div>

                    <div>
                        <DropDown>
                            <div>
                                <a href="!#"> Fundraise For</a>

                            </div>
                            <div>
                                <img src="https://pics.freeicons.io/uploads/icons/png/20305395141540882611-512.png" alt="DropDown-Icon" />

                            </div>
                        </DropDown>
                    </div>
                    <div>
                        <a href="!#"> How It Works</a>
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
                            <a href="!#">Start a Fundraiser</a>
                        </div>
                    </Fundraiser>
                    <div>
                        <a href="!#">Sign In</a>
                    </div>


                </div>
            </RightItems>
        </NavParent>
        </>
    )
}
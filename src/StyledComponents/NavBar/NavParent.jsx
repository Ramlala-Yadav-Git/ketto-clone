import styled from "styled-components";

const NavParent = styled.div`
display: flex;
margin-bottom: 1px;
border-bottom: 1px solid rgb(255,255,255);
justify-content: space-around;
padding: 2px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

 
`;
const LeftItems = styled.div`
/* border: 1px solid green; */
display: flex;
padding: 10px;
padding-left:0px;

& > div{
    display: flex;
    justify-content: space-between;

}
& > div>div{
    margin-left: 20px;
    margin-top: 20px;
}
& > div>div > a{
    text-decoration: none;
    color: black;
}

`

const RightItems = styled.div`
/* border: 1px solid green; */

& > div{
    display: flex;
    justify-content: space-between;
    margin-left: -300px;
}
& > div > div{
    margin-left: 10px;
    margin-top: 30px;
}

& > div>div > a{
    text-decoration: none;
    color: black;
}
`


const KetoIcon = styled.div`
/* border: 1px solid black; */
cursor: pointer;
img{
    width: 80px;
    margin-top: -20px;
}
`
const Icons = styled.div`

&>div{
    display: flex;
justify-content: space-between;
}
`
const DropDown = styled.div`
position: relative;
margin-right: 10px;
a{
    text-decoration: none;
    color: black;

    
}
img{
width: 20px;
position: absolute;
right: -20px;
top: 2px;
    }
i{
width: 20px;
position: absolute;
right: -25px;
top: 7px;
    }
`

const WhatappIcon = styled.div`
border: 2px solid rgb(37,211,102);
margin-bottom: 10px;
color:rgb(37,211,102);
padding: 0px 30px 5px 10px ;
border-radius: 5px;
cursor: pointer;
&>div{
    display: flex;
    font-weight: bold;
   
}
img{
    width: 18px;
    border-radius:10%;
    margin-right: 5px;
    margin-bottom: -0px;
    margin-top: 4px;
}

`
const SearchIcon = styled.div`
position: relative;

& > div{
    margin-left: 10px;
}
i{
    position: absolute;
    width: 24px;
    left:-15px;
    top: 5px;
    font-size: 18px;
    margin-right: 2px;
    color: #887878;
    font-weight: 700;

}

`
const Fundraiser = styled.div`
margin-bottom: 10px;
border: 2px solid rgb(1,191,189);
padding: 1px 30px 1px 10px ;
border-radius: 5px;

a{
    text-decoration: none;
    color:rgb(1,191,189) ;
    font-weight: bold;
}
`

export { NavParent, KetoIcon, LeftItems, RightItems, Icons, DropDown, WhatappIcon, SearchIcon, Fundraiser }
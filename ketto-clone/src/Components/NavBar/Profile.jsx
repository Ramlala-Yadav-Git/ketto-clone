
import stylesp from "../NavBar/Profile.module.css"


export function Profile({ name }) {
    const HandleLogOut = () => {
        localStorage.clear();
        document.location.href = "http://localhost:3000/"
    }


    return (
        <>

            <div className={stylesp.header}>
                <img src="https://kettocdn.gumlet.io/media/individual/4767000/4767219/image/60facb8ac5fc4.jpg?dpr=1.0&q=70&w=160" alt="profile" />
                <i class="fas fa-sort-down"></i>
            </div>
            <div className={stylesp.des}>
                <h5>{name}</h5>
                <p>View Profile</p>
                <hr />

                <p>My Fundraisers</p>
                <hr />
                <p>My Donations</p>
                <hr />
                <p>View My Impact</p>
                <hr />
                <p onClick={() => HandleLogOut()}> Logout</p>
            </div>

        </>
    )

}
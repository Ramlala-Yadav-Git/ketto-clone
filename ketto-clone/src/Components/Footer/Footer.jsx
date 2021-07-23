import Styles from './Footer.module.css'
export function Footer(){
    return <div className={Styles.maindiv}>
        <div className={Styles.footer_div}>
        <div className={Styles.left}>
            <div>
               <img src="https://kettocdn.gumlet.io/images/logo-dark-bg.svg?w=80&dpr=1.0" alt="" />
               <hr />
            </div>
            <div className={Styles.icons}>
            <i class="fab fa-facebook-square fa-2x"></i>
            <i class="fab fa-twitter fa-2x"></i>
            <i class="fab fa-linkedin-in fa-2x"></i>
            <i class="fab fa-youtube fa-2x"></i>
            <i class="fab fa-instagram fa-2x"></i>
            <i class="fab fa-whatsapp fa-2x"></i>
            </div>
            <div className={Styles.downloads}>1.5M +</div>
            <div className={Styles.followers}>Followers</div>
            <div className={Styles.info}>
                <p>For any queries</p>
                <p>Email: info@ketto.org</p>
                <p>Contact No: +91 7700975559</p>
            </div>
        </div>
        <div className={Styles.right}>
            <div className={Styles.first_r}>
                <h4>Causes</h4>
               <div><a href="https://www.ketto.org/cause/medical-fundraising">Medical crowdfunding</a></div>
               <div><a href="https://www.ketto.org/cause/cancer-crowdfunding">Cancer Crowdfunding</a></div>
               <div><a href="https://www.ketto.org/campaign/crowdfunding-for-education.php">Education Crowdfunding</a></div>
               <div><a href="https://www.ketto.org/cause/creative-fundraising">Creative Fundraising</a></div>
               <div><a href="https://www.ketto.org/cause/help-children">Child Welfare</a></div>
               <div><a href="https://www.ketto.org/cause/animal-fundraising">Animal Fundraisers</a></div>
               
            </div>
            <div className={Styles.second_r}>
                <h4>How it works?</h4>
                <div><a href="https://www.ketto.org/how_it_works/fundraising-ideas-for-ngos.php">Fundraising for NGOs</a></div>
                <div><a href="https://www.ketto.org/how_it_works/fundraising-ideas-for-corporates.php">Corporates</a></div>
                <div><a href="https://www.ketto.org/crowdfunding/fundraisers">Browse Fundraiser</a></div>
                <div><a href="https://www.ketto.org/crowdfunding">What is Crowdfunding?</a></div>
                <div><a href="https://covid19.ketto.org/">COVID-19 Relief Fund</a></div>
                <div><a href="https://support.ketto.org/hc/en-us/categories/360000934394-Withdraw-Funds">Withdraw Funds</a></div>
            </div>
            <div className={Styles.third_r}>
                <h4>About Us</h4>
                <div><a href="https://www.ketto.org/about/about-us.php">Team Ketto</a></div>
                <div><a href="https://www.ketto.org/about/pressclub.php">In The News</a></div>
                <div><a href="https://www.ketto.org/about/our-partners.php">Our Partners</a></div>
                <div><a href="https://www.ketto.org/new/about/about-us">Careers</a></div>
                <div><a href="https://www.ketto.org/blog">Ketto Blog</a></div>
                <div><a href="https://www.ketto.org/success_stories.php">Success Stories</a></div>
            </div>
            <div className={Styles.fourth_r}>
                <h4>Support</h4>
                <div><a href="https://www.ketto.org/medical-finance-loans">Medical Finance</a></div>
                <div><a href="https://www.ketto.org/support/faqs.php">FAQs & Help Center</a></div>
                <div><a href="https://www.ketto.org/support/fundraising-tips-ideas.php">Fundraising Tips</a></div>
                <div><a href="https://www.ketto.org/support/campaign-video.php">Fundraiser Video</a></div>
                <div><a href="https://support.ketto.org/hc/en-us/categories/360001366974-Trust-Safety-Queries">Trust & Safety</a></div>
                <div><a href="https://www.ketto.org/support/plans-and-pricing.php">Plans & Pricing</a></div>
                <div><a href="https://www.ketto.org/support/contact-us.php">Contact Us</a></div>
            </div>
        </div>
    </div>
    <div><img src="https://ketto.gumlet.io/assets/images/homepage/footer-secured-card.png?w=457&dpr=1.0&q=50" alt="" /></div>
    <div><hr /></div>
    <div>Copyright © 2021 Ketto Online Ventures Pvt Ltd. All Rights Reserved.
 Terms of Use |
 Privacy Policy |
 AML Policy |
 Use of cookies </div>
    </div>
}
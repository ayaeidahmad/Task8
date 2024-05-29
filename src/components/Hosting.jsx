import "../assets/style/Hosting.css"

// let allHosting= [
//     {
//         title:'Basic' ,
//         p1 : 'for very small businesses and freelancers.' ,
//         dollar : '$2.5/mo' ,
//         item1 : 'Disk Space:',
//         span1 : '500 M.B',
//         item2 : 'Bandwidth:',
//         span2 : '500 G.B',
//         item3 : 'SubDomains: ',
//         span3 : 'Unlimited',
//         item4 : 'Parked Domains:',
//         span4 : 'Unlimited',
//         item5 : 'E-mail Accounts:' ,
//         span5 : 'Unlimited',
//         item6 : 'Cpanel (control panel):' ,
//         span6 : 'Yes',
//         item7 : 'Money Back Guarantee: ' ,
//         span7 : '14 Days',
//         btn :'You will have 1 Gift'
//     } , 
//     {
//         title:'Pro' ,
//         p1 : 'for Individuals that need sharing vlogs or need huge portfolio.' ,
//         dollar : '$2.5/mo' ,
//         item1 : 'Disk Space:',
//         span1 : '500 M.B',
//         item2 : 'Bandwidth:',
//         span2 : '500 G.B',
//         item3 : 'SubDomains: ',
//         span3 : 'Unlimited',
//         item4 : 'Parked Domains:',
//         span4 : 'Unlimited',
//         item5 : 'E-mail Accounts:' ,
//         span5 : 'Unlimited',
//         item6 : 'Cpanel (control panel):' ,
//         span6 : 'Yes',
//         item7 : 'Money Back Guarantee: ' ,
//         span7 : '14 Days',
//         btn :'You will have 1 Gift'
//     }
// ]
const Hosting = () => {
    return (
        <section className="hosting">
            <h2>Hosting Pricing</h2>
            <div className="cards">
                <div className="card card1">
                    <div className="content">
                        <h4>Basic</h4>
                        <p className="p1">for very small businesses and freelancers.</p>
                        <p className="dolar1">$2.5/mo</p>
                        <ul className="list">
                            <li>Disk Space: <span>500 M.B</span></li>
                            <li>Bandwidth: <span>500 G.B</span></li>
                            <li>SubDomains: <span>Unlimited</span></li>
                            <li>Parked Domains: <span>Unlimited</span></li>
                            <li>E-mail Accounts: <span>Unlimited</span></li>
                            <li>Cpanel (control panel): <span>Yes</span></li>
                            <li>Money Back Guarantee: <span>14 Days</span></li>
                        </ul>
                    </div>
                    <div className="btn1">
                        <p>You will have 1 Gift</p>
                    </div>
                </div>
                <div className="card card2">
                    <div className="content">
                        <h4>Pro</h4>
                        <p className="p2">for Individuals that need sharing vlogs or need huge portfolio.</p>
                        <p className="dolar1">$5/mo</p>
                        <ul className="list">
                            <li>Disk Space: <span>3000 M.B</span></li>
                            <li>Bandwidth: <span>3 TERA</span></li>
                            <li>SubDomains: <span>Unlimited</span></li>
                            <li>Parked Domains: <span>Unlimited</span></li>
                            <li>E-mail Accounts: <span>Unlimited</span></li>
                            <li>Cpanel (control panel): <span>Yes</span></li>
                            <li>Money Back Guarantee: <span>14 Days</span></li>
                        </ul>
                    </div>
                    <div className="btn2">
                        <p>1 Gift per/mo for year</p>
                    </div>
                </div>
                <div className="card card3">
                    <div className="content">
                        <h4>Business</h4>
                        <p className="p3">for Team that need sharing and reporting.</p>
                        <p className="dolar1">$8/mo</p>
                        <p className="dolar2">5% discount during 2022</p>
                        <ul className="list">
                            <li>Disk Space: <span>5000 M.B</span></li>
                            <li>Bandwidth: <span>5 TERA</span></li>
                            <li>SubDomains: <span>Unlimited</span></li>
                            <li>Parked Domains: <span>Unlimited</span></li>
                            <li>E-mail Accounts: <span>Unlimited</span></li>
                            <li>Cpanel (control panel): <span>Yes</span></li>
                            <li>Money Back Guarantee: <span>14 Days</span></li>
                        </ul>
                    </div>
                    <div className="btn3">
                        <p>3 Gifts per/mo for year</p>
                    </div>
                </div>
                <div className="card card4 ">
                    <div className="content">
                        <h4>Enterprise</h4>
                        <p className="p4">for large companies that need admins & security</p>
                        <p className="dolar1">$12/mo</p>
                        <p className="dolar2">5% discount during 2022</p>
                        <ul className="list">
                            <li>Disk Space: <span>10000 M.B</span></li>
                            <li>Bandwidth: <span>10 TERA</span></li>
                            <li>SubDomains: <span>Unlimited</span></li>
                            <li>Parked Domains: <span>Unlimited</span></li>
                            <li>E-mail Accounts: <span>Unlimited</span></li>
                            <li>Cpanel (control panel): <span>Yes</span></li>
                            <li>Money Back Guarantee: <span>14 Days</span></li>
                        </ul>
                    </div>
                    <div className="btn4">
                        <p>Just Call Us</p>
                    </div>
                </div>
            </div>
            <p className="para1">Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support.</p>
            <p className="para2">
                <span>Go Online, choose your plan and Contact us on:</span>
                <span>contact@focal-x.com</span>
                <span>|</span>
                <span> <a href="tel:+963 935 033 139">+963 935 033 139</a></span>
            </p>
        </section>
    )
}

export default Hosting
import "../assets/style/Services.css"

let allServices= [
    {
        title:'Branding' ,
        // p1 : 'The brand is hope,' ,
        p2 : 'The brand is hope,it is also the source of inspiration for everything you do when you deal with your customers and that is the important and emotional thing. Your Brand and Visual identity represents an intrinsic Value to your company.' ,
        p3 : 'In our marketing agency, we provide:' ,
        item1 : 'Visual identity design.',
        item2 : 'Define Brand Identity.',
        item3 : 'Define Brand personality.',
        item4 : 'Building Your brand strategy.',
        item5 : 'Market research and competitors study' ,
        p4 :'We walk with you from A to Z.' ,
        img1 : 'brandingOrange.png' ,
        img2 :'brandingpattren.png' ,
        img3 :' ' ,
        img4 :' '
    } ,
    {
        title:'Marketing' ,
        // p1 : 'Talk to your customers and tell them about you and your company’s story through us the way you want.' ,
        // span : 'you and your company’s' ,
        p2 : 'Talk to your customers and tell them about you and your company’s story through us the way you want. Let us plan the content that will bring your audience closer to you.' ,
        p3 : 'In focal X agency, we provide:' ,
        item1 : 'E-mail marketing.',
        item2 : 'Affiliate marketing.',
        item3 : 'Influencer marketing.',
        item4 : 'Market research and Analysis.',
        item5 : 'App store optimization ( ASO ).' ,
        item6 : 'Search engine Marketing ( SEM ).' ,
        item7 : 'Search engine optimization ( SEO ).' ,
        item8 : 'Social media marketing & campaigns.' ,
        img1 : 'markiting.png' ,
        img2 :'markrtingpattren.png'
    }
]
const Services = () => {
    return (
        <section className="services">
            <h2>Our Services</h2>
            <div className="cards">
                {allServices.map(index => {
                    return (
                    <div className="card1" key={allServices.title}>
                        <h4>{index.title}</h4>
                        <p className="p1">{index.p1}</p>
                        <p className="p2">{index.p2}{index.span}</p>
                        <p className="p3">{index.p3}</p>
                        <ul className="list1">
                            <li>{index.item1}</li>
                            <li>{index.item2}</li>
                            <li>{index.item3}</li>
                            <li>{index.item4}</li>
                            <li>{index.item5}</li>
                            <li>{index.item6}</li>
                            <li>{index.item7}</li>
                            <li>{index.item8}</li>
                        </ul>
                        <p className="p4">{index.p4}</p>
                        <img className="brandingOrange " src={index.img1} alt="brandingOrange" />
                        <img className="brandingpattren" src={index.img2} alt="brandingpattren" />
                        {/* <img className="markiting" src={index.img3} alt="markiting" />
                        <img className="markrtingpattren" src={index.img4} alt="markrtingpattren" /> */}
                    </div>
                    )
                } ) }
            </div>
            </section> ) }
                /* <div className="card2">
                    <h4>Marketing</h4>
                    <p className="p1">Talk to your customers and tell them <span>you and your company’s</span>
                    story through us the way you want.</p>
                    <p className="p2">Let us plan the content that will bring your audience closer to you.</p>
                    <p className="p3">In our marketing agency, we provide:</p>
                    <ul className="list2">
                        <li>E-mail marketing.</li>
                        <li>Affiliate marketing.</li>
                        <li>Influencer marketing.</li>
                        <li>Market research and Analysis.</li>
                        <li>App store optimization ( ASO ).</li>
                        <li>Search engine Marketing ( SEM ).</li>
                        <li>Search engine optimization ( SEO ).</li>
                        <li>Social media marketing & campaigns.</li>
                    </ul>
                    <img className="markiting" src="markiting.png" alt="markiting" />
                    <img className="markrtingpattren" src="markrtingpattren.png" alt="markrtingpattren" />
                </div> */

export default Services
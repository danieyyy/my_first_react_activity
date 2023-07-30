import banner from '../photos/banner.jpg'

const Home = () => {

    return(
        <div className="About">
            <div className="quote">
                <img src={banner} alt="banner" className="img_banner" width="100%"></img>
                <p className="txt_quote">"Tech It to the Limit!"</p>
            </div>
            <div className="home_content">
                <h1 className="home_contentH1">This is the Home Page</h1>
                .<br/>
                .
            </div>
        </div>
    )

}

export default Home;
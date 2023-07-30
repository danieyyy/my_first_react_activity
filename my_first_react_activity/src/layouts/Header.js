import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <nav>
                <div className="header_container">
                    <div className="header_logo">DaniTech</div>
                    <div className="header_content">
                        <Link to="/home" className="link_item">Home</Link>
                        <Link to="/blog" className="link_item">Blog</Link>
                        <Link to="/contact" className="link_item">Contact</Link>
                        <Link to="/about" className="link_item">About</Link>
                    </div>
                </div>
                
            </nav>
        </header>
    )
}
export default Header;
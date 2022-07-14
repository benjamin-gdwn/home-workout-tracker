import {Link, link} from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar" style={{
            color: '#cdb4db',
        }}>
            <h1>The Fitness Blog</h1>
            <Link to="/">Home</Link>
            {/* <a href="/">Home</a> */}
            <Link to="/Create">New Activity</Link>
            {/* <a href="/Create">New Activity </a> */}

        </nav>
    );
}
 
export default Navbar;
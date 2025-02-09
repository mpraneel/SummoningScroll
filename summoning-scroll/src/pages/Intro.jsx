// src/IntroPage.js
    import { useNavigate } from 'react-router-dom';
    import "../styles/Intro.css";

    const Intro = () => {
    const navigate = useNavigate();

    const handleLoginPress = () => {
        navigate('/login');
    };
    return (
        <div className="intro-container">
            <div className="intro-logo">
            <img src="/Seal.png" alt="Wax Seal" className="intro-wax-seal" />
            </div>
            <button className="intro-login-button" onClick={handleLoginPress}>Login</button>
            <button className="signup-button">Sign Up</button>
        <div className="intro-content">
            <h1 className="intro-title">Welcome To Summoning Scroll</h1>
            <p className="intro-paragraph">
            Are you ready to embark on a journey for the betterment of your community?
            </p>
            <p className="intro-paragraph">
            Well, avid adventurers such as yourself can join one of our many volunteer guilds and make a real impact! 
            Whether you're passionate about environmental conservation, community outreach, education, or you’re just beginning to venture into the world of volunteering, we have a place for you.
            </p>
            <p className="intro-paragraph">
            Step into a world where kindness meets action, where your skills and enthusiasm can create meaningful change. As a member of our many guilds, you’ll collaborate with like-minded individuals, 
            take on exciting missions, and contribute to projects that uplift those in need.
            </p>
            <p className="intro-paragraph">
            Your journey starts here—discover your calling, connect with a community of changemakers, and be the hero your city needs. Join us today and turn your passion into purpose!
            </p>
            
        </div>
        </div>
    );
    };

    export default Intro;
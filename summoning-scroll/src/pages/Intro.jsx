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
            <h1 className="intro-title">Welcome To Summoning Scroll!</h1>
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
            <div className="intro-content2">
            <h1 className="intro-titletwo">
            How To Get Started
            </h1>
            <h1 className="intro-Subheading1">
            Guilds
            </h1>
            <div class="subpara-container1">
                <p className="intro-SubPara1">
                Whether it’s a volunteer organization or an independent group looking to help out the community, our guilds provide the perfect platform to connect, collaborate, and make a lasting impact. 
                Each guild is dedicated to a specific cause based on their volunteering specialty. Keep a look out for quest postings from your favorite guilds!
                </p>
                <img src="/castle.png" alt="Castle" class="castle-image" />
            </div>
            <h1 className="intro-Subheading2">
            Quests
            </h1>
            <div class="subpara-container2">
                <img src="/Quest.png" alt="Quest" class="quest-image" />
                <p className="intro-SubPara2">
                Quests are your chance to take action and level up your impact! Each guild posts quests tailored to their cause, giving you the opportunity to gain experience, 
                hone your skills, and make a real difference in the community. Complete quests to earn recognition, unlock new opportunities, and maybe even score some exclusive guild cosmetics along the way. 
                Stay tuned for new quests from your favorite guilds and embark on your next adventure in volunteering!
                </p>
            </div>
            <h1 className="intro-Subheading3">
            Customization
            </h1>
            <div class="subpara-container3">
                <p className="intro-SubPara3">
                Express yourself with a variety of customization options! Outfit your avatar with unique gear, display your allegiance with guild banners, and personalize your space with wallpapers and stickers. By completing special quest objectives, 
                you can unlock exclusive gear tied to different guilds, showcasing your dedication and achievements. Stand out, show off your style, and let your volunteer journey be as unique as you are!
                </p>
                <img src="/WizardHat.png" alt="Wizard" class="wizard-image" />
            </div>
            <h1 className="intro-Subheading4">
            Competition
            </h1>
            <div class="subpara-container4">
                <img src="/SwordClash.png" alt="Swords" class="sword-image" />
                <p className="intro-SubPara4">
                Compete for glory and recognition on the leaderboards! Adventurers can track their volunteering efforts on both global and local leaderboards, seeing how they rank against others in their quest to make a difference. Guilds will also have their own leaderboard, showcasing the most active and dedicated groups based on completed quests. Climb the ranks, earn bragging rights, 
                and prove your guild’s strength by taking on more quests and making a lasting impact!
                </p>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default Intro;
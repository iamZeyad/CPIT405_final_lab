import './About.css';
const About = () => {
    return (
        <>
        <div className="About-container">
            <div className="About-website">
                <h1 className="About-website-header">Transcripter App</h1>
                <p>is a web app created using React.js utilizing{' '}  
                    <a className='openAI' href="https://platform.openai.com/docs/guides/speech-to-text" target='_blank'>OpenAI's Whisper model</a>
                    , Php for the backend server, and MariaDB for the database</p>
            </div>
            <div className="About-developers">
                <div className="About-developer-Zeyad">
                    <h1 className="Zeyad">Zeyad Taleb Alamoudi</h1>
                    <a className="linkedin" href="https://www.linkedin.com/in/zeyadalamoudi01/" target='_blank'>Linked in</a>
                </div>
                <div className="About-developer-Anas">
                    <h1 className="Anas">Anas Rajab Alzahrani</h1>
                    <a className="linkedin" href="https://www.linkedin.com/in/anas-alzahrani-b48b9125b" target='_blank'>Linked in</a>
                </div>
                <div className="About-developer-Faisal">
                    <h1 className="Faisal">Faisal Ahmed Alzahrani</h1>
                    <a className="linkedin" href="https://www.linkedin.com/in/faisal-alzahrani-a92903269/" target='_blank'>Linked in</a>
                </div>
            </div>
        </div>
        </>
    )
}
export default About;
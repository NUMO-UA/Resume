


const Left = () => {
    return (
        <section className="left-section">
            <div className="left-content">
                <div className="profile">
                    <div className="image">
                        <img src="https://cdn.discordapp.com/attachments/666273061703647265/1014992689210597437/unknown.png" />
                    </div>
                    <h2 className="name">Nikita Zakharchuk</h2>
                    <p className="career">Frontend Developer</p>
                </div>
                <div className="contact-info">
                    <h3 className="main-title">Contact Info</h3>
                    <ul>
                        <li>
                            <i className="fa fa-phone"></i>
                            +380993676761
                        </li>
                        <li>
                            <i class="fa fa-telegram" aria-hidden="true"></i>
                            <a href="https://t.me/NUMO3301" target="_blank" rel="noopener noreferrer">@NUMO3301</a>
                        </li>
                        <li>
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            zetpalladin@gmail.com
                        </li>
                        <li>
                            <i class="fa fa-github" aria-hidden="true"></i>
                            <a href="https://github.com/NUMO-UA" target="_blank" rel="noopener noreferrer">NUMO-UA</a>
                        </li>
                        <li>
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                            <a href="https://www.linkedin.com/in/nikita-zakharchuk-7580b0207/" target="_blank" rel="noopener noreferrer">Nikita Zakharchuk</a>
                        </li>
                        <li>
                            <i className="fa fa-instagram"></i>
                            <a  href='https://www.instagram.com/numo_ua/' target="_blank" rel="noopener noreferrer">@numo_ua</a>
                        </li>
                        <li>
                            <i className="fa fa-map-marker"></i>
                            Ukraine, Kyiv
                        </li>
                    </ul>
                </div>
                <div className="skills-section">
                    <h3 className="main-title">Hard Skills</h3>
                    <ul>
                        <li>
                            <p className="skill-title">html</p>
                            <div >
                                <p className="skill-title">css</p>
                            </div>
                        </li>
                        <li>
                            <p className="skill-title">Javascript</p>
                            <div >
                                <p className="skill-title">MUI</p>
                            </div>
                        </li>
                        <li>
                            <p className="skill-title">React</p>
                            <div >
                                <p className="skill-title">Node.js</p>
                            </div>
                        </li>
                        <li>
                            <p className="skill-title">Redux</p>
                            <div >
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="soft-skills-section">
                    <h3 className="main-title">Soft Skills</h3>
                    <ul>
                        <li>
                            <p className="soft-skill-title">sociability</p>
                        </li>
                        <li>
                            <p className="soft-skill-title">responsibility</p>
                        </li>
                        <li>
                            <p className="soft-skill-title">stress tolerance</p>
                        </li>
                        <li>
                            <p className="soft-skill-title">team player</p>
                        </li>
                    </ul>
                </div>
                <div className="references-section">
                    <h3 className="main-title">Languages</h3>
                    <div className="referee">
                        <h6 className="sub-title">Ukrainian</h6>
                        <p className="sub-para">Mother tongue</p>
                    </div>
                    <div className="referee">
                        <h6 className="sub-title">English</h6>
                        <p className="sub-para">Limited Working Proficiency</p>
                    </div>
                    <div className="referee">
                        <h6 className="sub-title">Russian</h6>
                        <p className="sub-para">Native</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Left;
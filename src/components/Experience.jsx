import experience from '../data/experience';

function Experience() {
    return (
        <section className="pt-4" id="experience-section">
            <h1 className="custom-h1">Experiences</h1>
            <ul className="list bg-base-100 rounded-box shadow-md pt-4">
                {experience.map((experience) => (
                    <li className="list-row">
                        <div><img className="size-10 rounded-box  border-black border-1" src={experience.companyLogo} /></div>
                        <div>
                            <div className="flex justify-between items-center">
                                <div className="custom-h3">{experience.title}</div>
                                <div className="custom-h3">{experience.year}</div>
                            </div>
                            {experience.projectName && (
                                <p>
                                    <span className="font-semibold">{experience.projectName}: {' '}</span>
                                    {experience.description}
                                </p>
                            )}

                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Experience
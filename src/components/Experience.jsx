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
                            <p>{experience.description}</p>
                        </div>
                    </li>
                ))}
                {/* <li className="list-row">
                    <div><img className="size-10 rounded-box  border-black border-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTRjodBI2-pe7Y7TNbJwEmCmZJgilnS4qiaw&s" /></div>
                    <div>
                        <div className="flex justify-between items-center">
                            <div>Software Engineer (Intern), uParcel</div>
                            <div>Jan 2023 - Dec 2023</div>
                        </div>
                        <div className="text-xs  font-semibold opacity-60">E-commerce Platform: Collaborated with developers to build an e-commerce platform using React and
                            Django, adhering to Agile methodology. Designed custom-based access control to ensure data confidentiality
                            and support diverse administrative users. Developed RESTful APIs and streamlined webpage banner and
                            promotion updates, reducing system downtime by eliminating the need for code deployment.   </div>

                        <div className="text-xs  font-semibold opacity-60">Routing Platform: Contributed to maintenance, debugging and refactoring code to enhance system stability.
                            Designed role-based access control to ensure each role has access only to authorized resources while
                            restricting unauthorized access.   </div>
                    </div>
                </li>
                <li className="list-row">
                    <div><img className="size-10 rounded-box  border-black border-1" src="https://www.immersification.org/assets/images/sitlogo.png" /></div>
                    <div>
                        <div className="flex justify-between items-center">
                            <div>Centre for Immersification  (Part Time), Android Developer</div>
                            <div>Apr 2022 - Jul 2022 </div>
                        </div>
                        <div className="text-xs  font-semibold opacity-60">Commuter Routing Mobile App: Focused on frontend development by implementing RecyclerView to
                            display past routes and enabling users to select route preferences.  Refactored the codebase to MVVM
                            architecture, improving code maintainability and ensuring a clear separation of concerns by removing
                            business logic from the view layer. Documented the codebase for easier maintenance. </div>

                        <div className="text-xs  font-semibold opacity-60">Optimized system performance by consolidating features into a single layer within Map box, significantly
                            reducing latency, enhancing overall app usability, and successfully decreasing application memory
                            consumption from 1GB to a more efficient 100MB.   </div>
                    </div>
                </li> */}

            </ul>
        </section>
    )
}

export default Experience
import videos from '../data/videos_info';

function Projects() {
    return (
        <section className="pt-4" id="projects-section">
            <h1 className="custom-h1">Projects</h1>
            <div className="carousel w-full mt-4">
                {videos.map((video) => (
                    <div key={video.id} id={video.id} className="carousel-item w-full ">
                        <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-8 items-center lg:items-start">
                            {/* Left Side: Video Player */}
                            <div className="flex-1 w-full lg:w-1/2"> {/* Takes roughly half width on larger screens */}
                                {video.type === 'local' ? (
                                    <video controls className="w-full aspect-video rounded-lg shadow-xl" src={video.src} title={video.title}>
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <iframe
                                        className="w-full aspect-video rounded-lg shadow-xl "
                                        src={video.src}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                )}
                            </div>

                            <div className="lg:hidden w-3/4 border-b border-gray-300 my-4"></div>
                            <div className="hidden lg:block h-auto border-l border-gray-300 mx-4"></div>

                            {/* Right Side: Description */}
                            <div className="flex-1 w-full h-full lg:w-1/2 flex flex-col justify-top">
                                <h1 className="custom-h2">{video.title}</h1>
                                <p className="text-base text-zinc-600 dark:text-zinc-400">
                                    {video.description}
                                </p>
                                {video.languages && (
                                    <div className="mt-4">
                                        <h4 className="custom-h3">Languages:</h4>
                                        <p>{video.languages.join(', ')}</p>
                                    </div>
                                )}

                                {video.technologies && (
                                    <div className="mt-4">
                                        <h4 className="custom-h3">Technologies:</h4>
                                        <p>{video.technologies.join(', ')}</p>
                                    </div>
                                )}

                                {video.database && (
                                    <div className="mt-4">
                                        <h4 className="custom-h3">Database:</h4>
                                        <p>{video.database}</p>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex w-full justify-center gap-2 py-2">
                {videos.map((video, index) => (
                    <a key={`btn-${video.id}`} href={`#${video.id}`} className="btn btn-xs btn-outline">
                        {index + 1}
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Projects
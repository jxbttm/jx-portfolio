import videos from '../data/videos';

function Projects() {
    return (
        <>
            <div className="pt-4">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">Projects</h1>
                <div className="carousel w-full">
                    {videos.map((video) => (
                        <div key={video.id} id={video.id} className="carousel-item w-full">
                            <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-8 items-center lg:items-start p-4 md:p-8">
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
                                    <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {video.description}
                                    </p>
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
            </div>
        </>
    )
}

export default Projects
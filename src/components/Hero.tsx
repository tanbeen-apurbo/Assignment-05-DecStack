import banner from "../assets/banner-stack.png"

const Hero = () => {
    return (
        <div>
            <div className="container mx-auto flex flex-col items-center gap-10 px-4 py-12 sm:px-6 md:flex-row md:justify-between md:gap-8 lg:px-8 lg:py-16">

                {/* text & button */}
                <div className="w-full max-w-xl space-y-4 text-left">
                    <div>
                        <h1 className="text-3xl font-extrabold leading-tight text-[#111827] sm:text-4xl lg:text-[44px]">
                            Build Your Ideal
                        </h1>
                        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[44px]">
                            <span className="bg-gradient-to-r from-[#F97316] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-relaxed text-gray-500 sm:text-base">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>

                    {/* button */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                        <button className="rounded-full bg-gradient-to-r from-[#F97316] to-[#EC4899] px-6 py-2.5 text-sm font-medium text-white shadow-sm">
                            Explore Technologies
                        </button>
                        <button className="rounded-full border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-800">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Image Div */}
                <div className="w-full max-w-[280px] flex-shrink-0 sm:max-w-xs md:w-auto">
                    <img
                        src={banner}
                        alt=""
                        className="mx-auto h-auto w-full object-contain"
                    />
                </div>

            </div>
        </div>
    );
};

export default Hero;
import BannerStack from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <div className="hero my-16">
            <div className="hero-content flex-row-reverse flex justify-between">
                <div>
                    <img
                        alt="Tailwind CSS hero component"
                        src={BannerStack}
                        className="max-w-sm rounded-lg"
                    />
                </div>
                <div className="w-1/2">
                    <h1 className="text-5xl font-bold">
                        Build Your Ideal <br />
                        <span className="mt-2 text-purple-800">Development Stack</span>
                    </h1>
                    <p className="py-6">
                        Explore frontend, backend, database and tooling options. Compare them side by side and put together the stack fits your next project.
                    </p>
                    <button className="mr-3 btn btn-primary">Explore Technologies</button>
                    <button className="btn btn-default">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
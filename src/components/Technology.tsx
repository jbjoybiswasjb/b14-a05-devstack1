const Technology = () => {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

            {/* Header */}
            <div className="flex items-start justify-between">

                {/* React Icon */}
                <div className="text-5xl leading-none text-cyan-400">
                    ⚛
                </div>

                {/* Popular Badge */}
                <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-500">
                    Popular
                </span>
            </div>

            {/* Technology Info */}
            <div className="mt-8">
                <h2 className="text-3xl font-bold text-gray-900">
                    React
                </h2>

                <p className="mt-4 text-lg leading-8 text-gray-500">
                    A declarative, component-based
                    JavaScript library for building modern user
                    interfaces.
                </p>
            </div>

            {/* Tags & Rating */}
            <div className="mt-8 flex items-center justify-between">

                <span className="rounded-md bg-gray-100 p-2 text-sm font-medium text-gray-600">
                    Frontend
                </span>

                <span className="text-sm text-gray-500">
                    Beginner-Friendly
                </span>

                <div className="flex items-center gap-1 text-gray-700">
                    <span className="text-yellow-400">★</span>
                    <span className="font-medium">4.9</span>
                </div>

            </div>

            {/* Button */}
            <button
                type="button"
                className="mt-8 w-full rounded-xl bg-[#080e1b] py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
                Add to Stack
            </button>

        </div>
    );
};

export default Technology;
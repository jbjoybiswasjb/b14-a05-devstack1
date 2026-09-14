import type { Itechnology } from "../types/technologyType";

interface TechnologyProps {
    technology: Itechnology;
    onAddToStack: (technology: Itechnology) => void;
}

const Technology = ({ technology, onAddToStack }: TechnologyProps) => {
    const {
        badge,
        category,
        description,
        difficulty,
        icon,
        name,
        rating,
    } = technology;

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

            {/* Header */}
            <div className="flex items-start justify-between">

                {/* Technology Icon */}
                <div>
                    <img
                        src={icon}
                        alt={`${name} icon`}
                        className="h-12 w-12 object-contain"
                    />
                </div>

                {/* Badge */}
                <span
                    className={`rounded-full border border-blue-100 px-4 py-2 text-sm font-medium ${
                        (badge === "Popular" &&
                            "bg-blue-50 text-blue-500") ||
                        (badge === "Most Popular" &&
                            "bg-green-50 text-green-500") ||
                        (badge === "Enterprise Orchestration" &&
                            "bg-purple-50 text-purple-500") ||
                        (badge === "Classic" &&
                            "bg-orange-50 text-orange-500") ||
                        (badge === "Versatile" &&
                            "bg-red-50 text-red-500") ||
                        (badge === "Flexible NoSQL" &&
                            "bg-blue-50 text-blue-500") ||
                        (badge === "SEO Friendly" &&
                            "bg-yellow-50 text-yellow-500") ||
                        (badge === "Top SQL" &&
                            "bg-indigo-50 text-indigo-500") ||
                        (badge === "Industry Standard" &&
                            "bg-blue-50 text-blue-500") ||
                        (badge === "Containers" &&
                            "bg-amber-50 text-amber-500") ||
                        (badge === "Modern" &&
                            "bg-cyan-50 text-cyan-500") ||
                        (badge === "Essential" &&
                            "bg-emerald-50 text-emerald-500") ||
                        (badge === "Scalable" &&
                            "bg-fuchsia-50 text-fuchsia-500")
                    }`}
                >
                    {badge}
                </span>
            </div>

            {/* Technology Info */}
            <div className="mt-8">
                <h2 className="text-3xl font-bold text-gray-900">
                    {name}
                </h2>

                <p className="mt-4 text-lg leading-8 text-gray-500">
                    {description}
                </p>
            </div>

            {/* Category, Difficulty & Rating */}
            <div className="mt-8 flex items-center justify-between">

                <span className="rounded-md bg-gray-100 p-2 text-sm font-medium text-gray-600">
                    {category}
                </span>

                <span className="text-sm text-gray-500">
                    {difficulty}
                </span>

                <div className="flex items-center gap-1 text-gray-700">
                    <span className="text-yellow-400">★</span>
                    <span className="font-medium">
                        {rating}
                    </span>
                </div>

            </div>

            {/* Add Button. */}
            <button
                type="button"
                onClick={() => onAddToStack(technology)}
                className="mt-8 w-full rounded-xl bg-[#080e1b] py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
                Add to Stack
            </button>

        </div>
    );
};

export default Technology;
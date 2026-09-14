import { use, useState } from "react";
import Technology from "./Technology";
import TechStackCard from "./TechStackCard";
import type { Itechnology } from "../types/technologyType";

interface TechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise);

    // Selected technologies
    const [stack, setStack] = useState<Itechnology[]>([]);

    // Add technology to stack.
    const handleAddToStack = (technology: Itechnology) => {
        setStack((prevStack) => {
            // Prevent duplicate technology
            const alreadyExists = prevStack.some(
                (item) => item.id === technology.id
            );

            if (alreadyExists) {
                return prevStack;
            }

            // Added another technology using rest operator in the stack.
            return [...prevStack, technology];
        });
    };

    // Remove one technology when clicked technology item id matched.
    const handleRemoveItem = (id: string) => {
        setStack((prevStack) =>
            prevStack.filter((item) => item.id !== id)
        );
    };

    // Remove all technologies using empty array.
    const handleClearAll = () => {
        setStack([]);
    };

    return (
        <div>
            {/* Header. */}
            <div className="mb-10">
                <h1 className="mb-2 text-4xl font-bold">
                    Explore the{" "}
                    <span className="text-purple-800">
                        Technologies
                    </span>
                </h1>

                <p>
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            {/* Technologies + Stack */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

                {/* Technology Cards */}
                <div className="grid grid-cols-1 gap-3 lg:col-span-3 lg:grid-cols-3">
                    {technologies.map((technology) => (
                        <Technology
                            key={technology.id}
                            technology={technology}
                            onAddToStack={handleAddToStack}
                        />
                    ))}
                </div>

                {/* Your Stack */}
                <div>
                    <TechStackCard
                        stack={stack}
                        onRemoveItem={handleRemoveItem}
                        onClearAll={handleClearAll}
                    />
                </div>

            </div>
        </div>
    );
};

export default Technologies;
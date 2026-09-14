import { use, useState } from "react";
import Technology from "./Technology";
import TechStackCard from "./TechStackCard";
import type { Itechnology } from "../types/technologyType";
import { toast } from "react-toastify";

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
                alert(`Already been added to your stack!`);
                toast.warning(`${technology.name} is already in your stack!`);
                return prevStack;
            }

            // Added another technology using rest operator in the stack.
            return [...prevStack, technology];
        });
        toast.success(`${technology.name} added to your stack!`);
    };

    // Remove one technology when clicked technology item id matched.
    const handleRemoveItem = (id: string) => {
        setStack((prevStack) =>
            prevStack.filter((item) => item.id !== id)
        );
        toast.success("Technology removed from your stack!");
    };

    // Remove all technologies using empty array.
    const handleClearAll = () => {
        setStack([]);
        toast.success("All technologies removed from your stack!");
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
                    {technologies.map((technology) => {
                        const isAdded = stack.some((item) => item.id === technology.id);

                        return (
                            <Technology
                                key={technology.id}
                                technology={technology}
                                onAddToStack={handleAddToStack}
                                isAdded={isAdded}
                            />
                        );
                    })}
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
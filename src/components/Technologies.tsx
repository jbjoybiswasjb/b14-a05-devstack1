import { use } from "react";
import Technology from "./Technology";
import TechStackCard from "./TechStackCard";
import type { Itechnology } from "../types/technologyType";


interface technologiesProps {
    technologiesPromise: Promise<Itechnology[]>;
}

const Technologies = ({technologiesPromise}: technologiesProps) => {
    const technologies = use(technologiesPromise);
    return (
        <div>
            <div className="mb-10">
                <h1 className="mb-2 text-4xl font-bold">Explore the <span className="text-purple-800">Technologies</span></h1>
                <p>Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                <div className="grid lg:col-span-3 grid-cols-1 lg:grid-cols-3 gap-3">
                    {
                        technologies.map((technology: Itechnology) => <Technology technology={technology}></Technology>)
                    }
                </div>
                <div>
                    <TechStackCard></TechStackCard>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
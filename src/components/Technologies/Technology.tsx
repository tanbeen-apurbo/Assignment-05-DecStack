import { use, useState } from "react";
import type { ITechnology } from "../../types/technologyTypes";
import AvailableTechnology from "./AvailableTechnology";
import SelectedTechnology from "./SelectedTechnology";

interface TechnologyProps {
    technologyPromise: Promise<ITechnology[]>
}

const Technology = ({ technologyPromise }: TechnologyProps) => {

    const technology = use(technologyPromise);

    const [selectedTechnology, setSelectedTechnology] = useState<ITechnology[]>([])

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">

            {/* Header */}
            <div className="mb-8 max-w-3xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                    Explore the{" "}
                    <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: "var(--theme-gradient)" }}
                    >
                        Technologies
                    </span>
                </h1>
                <p className="mt-3 text-base sm:text-lg text-gray-500">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

                <div className="md:col-span-2 lg:col-span-3">
                    <AvailableTechnology
                        technology={technology}
                        selectedTechnology={selectedTechnology}
                        setSelectedTechnology={setSelectedTechnology}
                    />
                </div>

                <div className="md:col-span-2 lg:col-span-1">
                    <SelectedTechnology
                        selectedTechnology={selectedTechnology}
                        setSelectedTechnology={setSelectedTechnology}
                    />
                </div>
            </div>
        </div>
    )
};

export default Technology;
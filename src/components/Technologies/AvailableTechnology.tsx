import type { ITechnology } from "../../types/technologyTypes";
import { type Dispatch, type SetStateAction } from 'react'
import TechnologyCard from "./TechnologyCard";

interface props {
    technology: ITechnology[]
    selectedTechnology: ITechnology[];
    setSelectedTechnology: Dispatch<SetStateAction<ITechnology[]>>
}

const AvailableTechnology = ({
  technology,
  setSelectedTechnology,
  selectedTechnology,
}: props) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {technology.map((tech: ITechnology) => {
        return (
          <TechnologyCard
            selectedTechnology={selectedTechnology}
            setSelectedTechnology={setSelectedTechnology}
            tech={tech}
            key={tech.id}
          />
        );
      })}
    </div>
  );
};

export default AvailableTechnology;
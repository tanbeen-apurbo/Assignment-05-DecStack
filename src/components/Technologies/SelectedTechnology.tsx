import type { ITechnology } from "../../types/technologyTypes";
import { type Dispatch, type SetStateAction } from "react";
import SelectedTechnologyCard from "./SelectedTechnologyCard";
import { toast } from "react-toastify";

interface IselectTechnology {
  selectedTechnology: ITechnology[];
  setSelectedTechnology: Dispatch<SetStateAction<ITechnology[]>>;
}

const SelectedTechnology = ({
  selectedTechnology,
  setSelectedTechnology,
}: IselectTechnology) => {
  if (selectedTechnology.length === 0) {
    return (
      <div className="w-full rounded-[12px] border border-[#e8edf3] bg-white p-5">
        <h2 className="text-[17px] font-semibold leading-5 text-[#111827]">
          Your Stack
        </h2>

        <p className="mt-[3px] text-[12px] leading-[17px] text-[#94a3b8]">
          No technologies selected yet.
        </p>

        <div className="mt-[14px] flex h-[64px] items-center justify-center rounded-[12px] border border-dashed border-[#dbe3ec]">
          <p className="text-[12px] text-[#94a3b8]">
            Your stack is empty.
          </p>
        </div>
      </div>
    );
  }

  const handleRemoveAll = () => {
    setSelectedTechnology([]);
    toast.info(`Your stack is empty`);
  };

  return (
    <div className="mt-6 w-full rounded-[12px] border border-[#e8edf3] bg-white p-5">
      
      {/* Header */}
      <h2 className="text-[17px] font-semibold leading-5 text-[#111827]">
        Your Stack
      </h2>

      <p className="mt-[3px] text-[12px] leading-[17px] text-[#94a3b8]">
        {selectedTechnology.length} Technologies Selected
      </p>

      {/* Selected Technologies */}
      <div className="mt-[14px]">
        {selectedTechnology.map((tech: ITechnology, ind: number) => (
          <SelectedTechnologyCard
            key={ind}
            tech={tech}
            setSelectedTechnology={setSelectedTechnology}
            selectedTechnology={selectedTechnology}
          />
        ))}
      </div>

      {/* Remove All */}
      <button
        onClick={handleRemoveAll}
        className="mt-[48px] h-[30px] w-full cursor-pointer rounded-[6px] border border-[#ff8b8b] bg-white text-[12px] font-medium text-[#ef4444] transition hover:bg-[#fff5f5]"
      >
        Remove All
      </button>
    </div>
  );
};

export default SelectedTechnology;
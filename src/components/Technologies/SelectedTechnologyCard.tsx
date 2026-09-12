import type { ITechnology } from "../../types/technologyTypes";
import { type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";
interface ISelectedTechnologyCardProps {
  tech: ITechnology;
  selectedTechnology: ITechnology[];
  setSelectedTechnology: Dispatch<SetStateAction<ITechnology[]>>;
}

const SelectedTechnologyCard = ({
  tech,
  selectedTechnology,
  setSelectedTechnology,
}: ISelectedTechnologyCardProps) => {
  const handleRemoveTechnology = (tech: ITechnology) => {
    const restTechnology = selectedTechnology.filter(
      (selectedTech) => selectedTech.name !== tech.name
    );

    setSelectedTechnology(restTechnology);
    toast.error(`${tech.name} removed successfully`);
  };

  return (
    <div className="mt-[6px] flex h-[49px] items-center justify-between rounded-[8px] border border-[#dce4ed] px-3">
      
      <div className="flex items-center gap-[10px]">
        <div className="flex h-[27px] w-[27px] items-center justify-center rounded-[6px]">
          <img
            src={tech.icon}
            alt={tech.name}
            className="h-[23px] w-[23px] object-contain"
          />
        </div>

        <div>
          <p className="text-[11px] font-semibold leading-[14px] text-[#111827]">
            {tech.name}
          </p>

          <p className="text-[8px] leading-[11px] text-[#94a3b8]">
            {tech.category}
          </p>
        </div>
      </div>

      <button
        onClick={() => handleRemoveTechnology(tech)}
        className="cursor-pointer text-[24px] font-light leading-none text-[#94a3b8]"
      >
        ×
      </button>

    </div>
  );
};

export default SelectedTechnologyCard;
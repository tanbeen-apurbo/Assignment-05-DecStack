import type { ITechnology } from "../../types/technologyTypes";
import { type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";
import { TiTick } from "react-icons/ti";

interface ITechnologyCardProps {
  tech: ITechnology;
  selectedTechnology: ITechnology[];
  setSelectedTechnology: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechnologyCard = ({
  tech,
  selectedTechnology,
  setSelectedTechnology,
}: ITechnologyCardProps) => {
  const badgeStyles: Record<string, string> = {
    Popular: "bg-blue-100 text-blue-600",
    Versatile: "bg-green-100 text-green-600",
    Fast: "bg-orange-100 text-orange-600",
    "Full-Stack": "bg-purple-100 text-purple-600",
    Standard: "bg-green-100 text-green-600",
    "Top SQL": "bg-blue-100 text-blue-600",
    Cache: "bg-red-100 text-red-600",
    Ubiquitous: "bg-yellow-100 text-yellow-600",
    Essential: "bg-cyan-100 text-cyan-600",
    Robust: "bg-blue-100 text-blue-600",
    Modern: "bg-cyan-100 text-cyan-600",
    Containers: "bg-blue-100 text-blue-600",
  };

  const isSelected = selectedTechnology.some(
    (selectedTech) => selectedTech.id === tech.id
  );

  const handleSelectTechnology = () => {
    setSelectedTechnology((prev) => [...prev, tech]);
    toast.success(`${tech.name} is added successfully`);
  };

  return (
    <div
      className={
        isSelected
          ? "mx-auto flex h-full w-full min-h-[260px] flex-col rounded-[16px] border border-[#c12781] bg-white p-4 sm:max-w-[280px] sm:p-5"
          : "mx-auto flex h-full w-full min-h-[260px] flex-col rounded-[16px] border border-[#edf0f4] bg-white p-4 sm:max-w-[280px] sm:p-5"
      }
    >
      {/* Top section */}
      <div className="flex items-start justify-between">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
          <img
            src={tech.icon}
            alt={tech.name}
            className="h-6 w-6 object-contain"
          />
        </div>

        <span
          className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${
            badgeStyles[tech.badge] || "bg-gray-100 text-gray-600"
          }`}
        >
          {tech.badge}
        </span>
      </div>

      {/* Content */}
      <div className="mt-[17px] flex-1">
        <h2 className="text-[17px] sm:text-[19px] font-semibold leading-[23px] text-[#111827]">
          {tech.name}
        </h2>

        <p className="mt-[9px] text-[12px] leading-[18px] text-[#64748b]">
          {tech.description}
        </p>
      </div>

      {/* Divider */}
      <div className="mt-[11px] border-t border-[#eef0f4]" />

      {/* Meta information */}
      <div className="mt-[9px] flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-[4px] bg-[#f1f5f9] px-[8px] py-[3px] text-[11px] font-medium text-[#475569]">
          {tech.category}
        </span>

        <span className="text-[11px] font-medium text-[#64748b]">
          {tech.difficulty}
        </span>

        <div className="flex items-center gap-[3px]">
          <span className="text-[12px] text-[#fbbf24]">★</span>
          <span className="text-[12px] font-medium text-[#334155]">
            {tech.rating}
          </span>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleSelectTechnology}
        disabled={isSelected}
        className={
          isSelected
            ? "mt-[15px] h-[36px] w-full cursor-not-allowed rounded-[8px] bg-[#fde7f3] text-[12px] font-medium text-[#c12781]"
            : "mt-[15px] h-[36px] w-full cursor-pointer rounded-[8px] bg-[#080d1a] text-[12px] font-medium text-white transition hover:bg-[#b8307b]"
        }
      >
        {isSelected ? (
          <span className="flex items-center justify-center gap-1">
            <TiTick className="text-[18px]" />
            Added to stack
          </span>
        ) : (
          "Add to Stack"
        )}
      </button>
    </div>
  );
};

export default TechnologyCard;
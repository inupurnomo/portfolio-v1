interface Props {
  name: string;
  size?: "medium" | "small";
}

export default function Button(props: Props) {
  return (
    <button
      className={`group relative rounded-sm bg-textPrimary font-titleFont text-transparent ${
        props.size === "small" && "px-3 py-2 text-xs"
      } ${!props.size && "px-7 py-4 text-sm"}`}
    >
      {props.name}
      <span className="absolute left-0 top-0 z-0 flex h-full w-full flex-row items-center justify-center rounded-sm border border-textLink bg-textLink text-textLight transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
        {props.name}
      </span>
    </button>
  );
}

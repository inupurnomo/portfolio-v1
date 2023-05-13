interface Props{
  text: string;
}
export default function TextHover({text}:Props) {
  return (
    <span className="group relative inline-flex h-7 cursor-pointer overflow-x-hidden text-textLink">
      {text}
      <span className="absolute bottom-1 left-0 h-[1px] w-full -translate-x-[110%] bg-textLink transition-transform duration-500 group-hover:translate-x-0"></span>
    </span>
  );
}
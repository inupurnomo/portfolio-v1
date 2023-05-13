export default function RightSide() {
  return (
    <div className="hidden w-full flex-col items-center justify-center gap-24 text-textDark dark:text-textLight mdl:flex">
      <div className="h-52 w-[1px] bg-textDark dark:bg-textLight"></div>
      <a href="mailto:contact@inupurnomo.com">
        <p className="rotate-90 font-bodyFont text-[13px] tracking-wide">
          contact@inupurnomo.com
        </p>
      </a>
    </div>
  );
}

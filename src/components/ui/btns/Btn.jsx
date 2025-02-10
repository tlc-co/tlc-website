import Link from "next/link";

export default function Btn({
  bg,
  color,
  text,
  icon,
  disabled,
  type,
  onClick,
  url,
  rounded,
  hover,
}) {
  return (
    <>
      {url ? (
        <button
          className={`h-full btn ${rounded} px-6 py-[11px] ${hover} text-nowrap transition duration-300 ${bg} ${color} ${
            bg === "glassy"
              ? "bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
              : ""
          }
  ${disabled ? "cursor-not-allowed bg-gray-300 opacity-50" : ""}
  `}
          disabled={disabled}
          type={type}
          onClick={onClick}
        >
          <Link
            href={url ? url : "#"}
            className="flex gap-2 items-center justify-center"
          >
            <span className="capitalize">{text}</span>
            {icon}
          </Link>
        </button>
      ) : (
        <button
          className={`h-full btn btn ${rounded} px-6 py-[11px] ${hover} flex gap-2 items-center justify-center text-nowrap transition duration-300 ${bg} ${color} ${
            bg === "glassy"
              ? "bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
              : ""
          }
        ${disabled ? "cursor-not-allowed bg-gray-300 opacity-50" : ""}
        `}
          disabled={disabled}
          type={type}
          onClick={onClick}
        >
          <span className="capitalize">{text}</span>
          {icon}
        </button>
      )}
    </>
  );
}

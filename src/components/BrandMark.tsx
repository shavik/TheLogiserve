import Image from "next/image";

const LOGO = {
  src: "/logo-lockup.png",
  width: 950,
  height: 650,
  alt: "THE LOGISERVE — We serve logistics with ease",
} as const;

export function BrandMark({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <span className="inline-flex items-center">
      <Image
        src={LOGO.src}
        alt={LOGO.alt}
        width={LOGO.width}
        height={LOGO.height}
        priority
        className={
          compact
            ? "h-16 w-auto max-w-[11.5rem] object-contain object-left sm:h-[4.5rem] sm:max-w-[13rem] md:h-20 md:max-w-[15rem]"
            : "h-36 w-auto max-w-[16rem] object-contain object-left sm:h-44 sm:max-w-[20rem]"
        }
      />
    </span>
  );
}

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
        quality={100}
        className={
          compact
            ? "h-[4.75rem] w-auto max-w-[13rem] object-contain object-left sm:h-20 sm:max-w-[15rem] md:h-[5.5rem] md:max-w-[17rem]"
            : "h-36 w-auto max-w-[16rem] object-contain object-left sm:h-44 sm:max-w-[20rem]"
        }
      />
    </span>
  );
}

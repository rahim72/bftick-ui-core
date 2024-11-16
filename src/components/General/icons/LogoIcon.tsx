// ---------------------------------------------------------------------
import Image from "next/image";

interface TypeProps {
  width: number;
  height: number;
  className: string;
}

export function LogoNoorIcon({
  width = 24,
  height = 24,
  className = ""
}: TypeProps) {
  return (
    <Image
      priority
      src="/assets/Logo/logoNoor.png"
      height={width}
      width={height}
      className=""
      alt="دفتر نور تهران"
    />
  );
}

export function LogoAvaIcon({
  width = 24,
  height = 24,
  className = ""
}: TypeProps) {
  return (
    <Image
      priority
      src="/assets/Logo/logoAva.png"
      height={width}
      width={height}
      className=""
      alt="دفتر نور تهران"
    />
  );
}

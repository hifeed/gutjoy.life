import { CLUB_URL } from "@/lib/club";

type ClubButtonProps = {
  className?: string;
};

export default function ClubButton({ className = "" }: ClubButtonProps) {
  return (
    <a
      href={CLUB_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-hifeed text-on-hifeed hover:bg-hifeed-hover font-[family-name:var(--font-label-md)] font-bold tracking-wider uppercase rounded-lg transition-all inline-flex items-center justify-center ${className}`}
    >
      ORDER
    </a>
  );
}

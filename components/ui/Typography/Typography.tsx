"use client";
import { Poppins } from "next/font/google";
import Link from "next/link";

const levelClasses = {
  1: "text-6xl font-bold text-title capitalize leading-2",
  2: "text-3xl font-semibold text-green-600",
  3: "text-2xl font-medium text-red-600",
  4: "text-xl font-normal text-yellow-600",
  5: "text-lg font-light text-purple-600",
  6: "text-base font-medium leading-5 uppercase text-title",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const Span = ({
  children,
  classname,
  onmouseenter,
  onmouseleave,
}: {
  children: React.ReactNode;
  classname?: string;
  onmouseenter?: () => void;
  onmouseleave?: () => void;
}) => {
  return (
    <span
      onMouseEnter={onmouseenter}
      onMouseLeave={onmouseleave}
      className={`text-sm text-body leading-relaxed ${classname}`}
    >
      {children}
    </span>
  );
};

export const P = ({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) => {
  return (
    <p className={`text-sm text-body leading-relaxed ${classname}`}>
      {children}
    </p>
  );
};

export const Title = ({
  level,
  children,
  classname,
}: {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  classname?: string;
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const combinedClasss = `${poppins.className} ${levelClasses[level]} ${classname}`;
  return <Tag className={combinedClasss}>{children}</Tag>;
};

export const LinkText = ({
  children,
  href,
  classname,
  isNav,
}: {
  children: React.ReactNode;
  href: string;
  classname?: string;
  isNav?: boolean;
}) => {
  return isNav ? (
    <Link
      href={href}
      className={`uppercase font-medium text-title leading-tight`}
    >
      {children}
    </Link>
  ) : (
    <Link
      href={href}
      className={`uppercase font-medium text-xs text-title leading-tight hover:text-secondary ${classname}`}
    >
      {children}
    </Link>
  );
};

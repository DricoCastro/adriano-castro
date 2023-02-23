import HeadNext from "next/head";

interface PrimaryHeadProps {
  title?: string;
  icon?: string;
  aditional?: any;
}

export const PrimaryHead = ({ aditional, title, icon }: PrimaryHeadProps) => {
  const localTitle = title ? `${title} | Adriano Castro` : " Adriano Castro";
  const localIcon = icon ?? "/favicon.ico";

  return (
    <HeadNext>
      <title>{localTitle}</title>
      <meta name="Description" content="Adriano Castro" />
      <meta name="keywords" content="Adriano Castro" />
      <link rel="icon" href={localIcon} />
      {aditional}
    </HeadNext>
  );
};

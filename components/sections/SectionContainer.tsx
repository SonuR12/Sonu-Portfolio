import React from "react";

interface Props extends React.PropsWithChildren<{ id: string; className?: string }> {}

export const SectionContainer = ({ children, id, className }: Props) => {
  return (
    <section id={id} className={`w-full relative flex justify-center z-30 ${className ?? ""}`}>
      {children}
    </section>
  );
};

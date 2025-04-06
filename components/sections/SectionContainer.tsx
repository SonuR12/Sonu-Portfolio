import React from "react";

interface Props extends React.PropsWithChildren<{ id: string }> {}

export const SectionContainer = ({ children, id }: Props) => {
  return (
        <section id={id} className="w-full reltaive flex justify-center z-30">
         {children}
        </section>
    );
};

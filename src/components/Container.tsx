import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className='
          max-w-[2520px]
          mx-auto
          xl:px-18
          md:px-10
          sm:px-2
          px-16
          bg-green-300
          font-poppins
        '>
      {children}
    </div>
  );
};

export default Container;

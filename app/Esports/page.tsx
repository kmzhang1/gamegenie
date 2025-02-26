import React from 'react';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const Esports = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-center">
      <TextGenerateEffect
        duration={2}
        words="The number one platform for personalized game recommendations and the latest gaming news."
      />
    </div>
  );
};

export default Esports;

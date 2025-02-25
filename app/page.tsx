import { Box } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { TextGenerateEffect } from '../ui/';

export default function HomePage() {
  return (
    <>
      <div className="flex flex-row h-screen w-full">
        <Welcome />
      </div>
      <ColorSchemeToggle />
    </>
  );
}

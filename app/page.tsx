import { Box } from '@mantine/core';
import { NavBar } from '@/components/NavBar/NavBar';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <div className="flex flex-row h-screen w-full">
        <div className="flex-shrink-0 w-64 bg-gray-900 p-4">
          <NavBar />
        </div>
        <div className="flex-grow bg-gray-800 p-6 overflow-auto">
          <Welcome />
        </div>
      </div>
      <ColorSchemeToggle />
    </>
  );
}

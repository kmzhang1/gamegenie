import { Anchor, Box, Text, Title } from '@mantine/core';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import classes from './Welcome.module.css';

export function Welcome() {
  const landingPagePhrase =
    'The number one platform for personalized game recommendations and the latest gaming news.';

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center text-center">
      <Title className={classes.title} ta="center">
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          GameGenie
        </Text>
      </Title>
      <TextGenerateEffect words={landingPagePhrase} duration={2} filter={false} />
    </div>
  );
}

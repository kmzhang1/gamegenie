import { Anchor, Box, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <Box className="flex flex-col justify-center items-center text-center">
      <Title className={classes.title} ta="center">
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          GameGenie
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        The number one platform for personalized game recommendations and the latest gaming news.
      </Text>
    </Box>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Icon2fa,
  IconBellRinging,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconLogout,
  IconReceipt2,
  IconSettings,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { Code, Group } from '@mantine/core';
import classes from './NavBar.module.css';

const data = [
  { link: '', label: 'Notifications', icon: IconBellRinging },
  { link: '/', label: 'Home Feed', icon: IconReceipt2 },
  { link: '/News', label: 'Latest News', icon: IconFingerprint },
  { link: '/Streaming', label: 'Streaming', icon: IconKey },
  { link: '/YourGames', label: 'Your Games', icon: IconDatabaseImport },
  { link: '/Esports', label: 'Esports', icon: Icon2fa },
  { link: '/Settings', label: 'Other Settings', icon: IconSettings },
];

export function NavBar() {
  const [active, setActive] = useState('Home Feed');

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Code fw={700}>v3.1.2</Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change Account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}

import React from 'react'
import { Button, Text } from '@mantine/core';

interface props {
  text: string;
  color?: string;
  href: string;
}

export function MainButton({text, color='dark-green', href}: props) {
  return (
    <a href={href}>
    <Button color={color} radius="xl" size='xl' >
    <Text fz="md">
      {text}
    </Text>
    </Button>
    </a>
      
  );
}
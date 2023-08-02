import React from 'react'
import { Button } from '@mantine/core';

interface props {
  text: string;
  color?: string;
  href: string;
}

export function MainButton({text, color='dark-green', href}: props) {
  return (
    <a href={href}>
    <Button color={color} radius="xl">
      {text}
    </Button>
    </a>
      
  );
}
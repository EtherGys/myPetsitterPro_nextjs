import React from 'react'
import { Button, Text } from '@mantine/core';

interface props {
  text: string;
  color?: string;
  href?: string;
  type: "button" | "submit" | "reset";
}

export function MainButton({text, color='dark-green', href, type}: props) {
  return (
    <a href={href}>
    <Button type={type} color={color} radius="xl" size='xl' >
    <Text fz="md">
      {text}
    </Text>
    </Button>
    </a>
      
  );
}
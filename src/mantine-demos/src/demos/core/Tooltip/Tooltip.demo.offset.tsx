import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Tooltip, Group, Button } from '@mantine/core';

const code = `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Offset by 20" offset={20}>
        <Button variant="outline">20 offset</Button>
      </Tooltip>
      <Tooltip label="Offset by -10" offset={-10}>
        <Button variant="outline">-10 offset</Button>
      </Tooltip>
    </>
  );
}

`;

export function Demo() {
  return (
    <Group position="center">
      <Tooltip label="Offset by 20" offset={20}>
        <Button variant="outline">20 offset</Button>
      </Tooltip>
      <Tooltip label="Offset by -10" offset={-10}>
        <Button variant="outline">-10 offset</Button>
      </Tooltip>
    </Group>
  );
}

export const offset: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};

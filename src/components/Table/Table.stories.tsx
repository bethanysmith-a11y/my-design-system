import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from './Table';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-2502&m=dev';

interface Product {
  name: string;
  description: string;
  price: string;
}

const columns = [
  { header: 'Product name', accessor: 'name' as const },
  { header: 'Description', accessor: 'description' as const },
  { header: 'Price', accessor: 'price' as const, alignRight: true },
];

const data: Product[] = [
  { name: 'Product 1', description: 'Description of product 1', price: '$4.50' },
  { name: 'Product 2', description: 'Description of product 2', price: '$6.75' },
  { name: 'Product 3', description: 'Description of product 3', price: '$2.00' },
  { name: 'Product 4', description: 'Description of product 4', price: '$12.99' },
  { name: 'Product 5', description: 'Description of product 5', price: '$8.25' },
];

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
  decorators: [(Story) => <div className="max-w-2xl"><Story /></div>],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns,
    data,
    caption: 'Product pricing table',
  },
};

export const Borderless: Story = {
  args: {
    columns,
    data,
    variant: 'borderless',
    caption: 'Product pricing table',
  },
};

export const Striped: Story = {
  args: {
    columns,
    data,
    variant: 'striped',
    caption: 'Product pricing table',
  },
};

export const Scrollable: Story = {
  args: {
    columns,
    data,
    scrollable: true,
    caption: 'Product pricing table',
  },
  decorators: [(Story) => <div className="max-w-xs"><Story /></div>],
};

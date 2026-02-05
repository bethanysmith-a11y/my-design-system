import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './Pagination';

const FIGMA_URL =
  'https://www.figma.com/design/QJD8h4L3NhbdvihveM3AMG/U.S.-Web-Design-System--USWDS--UI-Design-Kit--Community-?node-id=1892-4485&m=dev';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: { design: { type: 'figma', url: FIGMA_URL } },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

function PaginationDemo({ totalPages, startPage }: { totalPages: number; startPage?: number }) {
  const [page, setPage] = useState(startPage ?? 1);
  return <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />;
}

export const FirstPage: Story = {
  render: () => <PaginationDemo totalPages={24} startPage={1} />,
};

export const MiddlePage: Story = {
  render: () => <PaginationDemo totalPages={24} startPage={12} />,
};

export const LastPage: Story = {
  render: () => <PaginationDemo totalPages={24} startPage={24} />,
};

export const FewPages: Story = {
  render: () => <PaginationDemo totalPages={5} />,
};

import Image from 'next/image';
import Header from '@/components/share-components/header';
import BooksPage from '@/components/booksPage';

export default function Home() {
  return (
    <div className='w-full h-auto'>
      <Header />
      <BooksPage />
    </div>
  );
}

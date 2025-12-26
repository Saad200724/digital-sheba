import { useState } from 'react';
import { FileText } from 'lucide-react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ProductCard';
import CartSidebar from '@/components/CartSidebar';

const documentProducts = [
  {
    id: 'office-365',
    name: 'Microsoft 365',
    description: 'Complete Office suite with 1TB storage',
    price: 799,
    originalPrice: 1499,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_365_%282022%29.svg',
    category: 'Documents',
    popular: true,
  },
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    description: 'Gmail, Docs, Drive & more',
    price: 599,
    originalPrice: 1100,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Google_Workspace_icon.svg',
    category: 'Documents',
  },
  {
    id: 'notion-plus',
    name: 'Notion Plus',
    description: 'All-in-one workspace',
    price: 599,
    originalPrice: 1100,
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg',
    category: 'Documents',
    badge: 'Popular',
    badgeColor: 'bg-amber-500',
  },
  {
    id: 'evernote-pro',
    name: 'Evernote Professional',
    description: 'Advanced note-taking & organization',
    price: 499,
    originalPrice: 900,
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Evernote_Icon.svg',
    category: 'Documents',
  },
  {
    id: 'dropbox-plus',
    name: 'Dropbox Plus',
    description: '2TB cloud storage',
    price: 699,
    originalPrice: 1200,
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg',
    category: 'Documents',
  },
  {
    id: 'pdf-expert',
    name: 'PDF Expert',
    description: 'Professional PDF editing',
    price: 399,
    originalPrice: 750,
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg',
    category: 'Documents',
  },
];

const Documents = () => {
  const [activeCategory, setActiveCategory] = useState('documents');

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <Header onMenuToggle={() => {}} />
      <div className="flex flex-1">
        <Sidebar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <main className="flex-1 ml-0 md:ml-20 p-4 md:p-6">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">Documents & Productivity</h1>
                <p className="text-muted-foreground">Essential tools for document management</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {documentProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </main>
      </div>
      <CartSidebar />
    </div>
  );
};

export default Documents;

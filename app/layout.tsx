import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <h1>Header na Malupet</h1>
        {children}
      <footer>
      Footer na mas malupet
      </footer>
      </body>
    </html>
  );
}
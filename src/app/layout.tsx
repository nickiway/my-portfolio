import 'styles/global.css';
import StoreProvider from 'providers/StoreProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StoreProvider>{children}</StoreProvider>
    </html>
  );
}

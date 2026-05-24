export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center justify-center h-screen bg-[#F5F5F5]">
      
     {children}
    
    </div>
  );
}

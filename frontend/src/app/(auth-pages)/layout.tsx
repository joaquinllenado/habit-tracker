export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return(
        <main className="flex-1 flex flex-col items-center justify-center">
            {children}
        </main>
    )
}
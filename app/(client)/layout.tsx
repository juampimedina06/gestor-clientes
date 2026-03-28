import Link from 'next/link';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-white/5 glass sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-8 h-16 flex items-center justify-between">
          <Link href="/user" className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Mi Espacio
          </Link>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Mi Perfil
            </Link>
            <Link 
              href="/login" 
              className="px-4 py-2 rounded-lg bg-secondary text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-all"
            >
              Cerrar Sesión
            </Link>
          </div>
        </div>
      </nav>
      <main className="py-8">{children}</main>
    </div>
  );
}

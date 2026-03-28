import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-white/5 glass sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              AdminPanel
            </span>
            <div className="hidden md:flex gap-6">
              <Link href="/admin" className="text-sm font-medium hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Clientes
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Configuración
              </Link>
            </div>
          </div>
          <Link 
            href="/login" 
            className="text-sm font-semibold text-muted-foreground hover:text-destructive transition-colors"
          >
            Cerrar Sesión
          </Link>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}

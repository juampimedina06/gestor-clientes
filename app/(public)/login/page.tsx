'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin'); // Default for the demo
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    

    if (role === 'admin') {
      router.push('/admin');
    } else {
      router.push('/user');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="glass p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Bienvenido
            </h1>
            <p className="text-muted-foreground mt-2">Ingresa a tu cuenta de gestor clientes</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80 ml-1">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80 ml-1">Contraseña</label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Simulación de selección de rol para el demo */}
            <div className="pt-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                Simular Rol (Para el demo)
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setRole('admin')}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                    role === 'admin' 
                      ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                      : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                  }`}
                >
                  Admin
                </button>
                <button
                  type="button"
                  onClick={() => setRole('client')}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                    role === 'client' 
                      ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                      : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                  }`}
                >
                  Cliente
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transform transition-active active:scale-[0.98] mt-4"
            >
              Iniciar sesión
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              ¿No tienes acceso? Contacta a tu administrador.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

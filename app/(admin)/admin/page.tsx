export default function AdminDashboard() {
  const mockClients = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com', joinedAt: '2024-03-20' },
    { id: 2, name: 'María García', email: 'maria@example.com', joinedAt: '2024-03-22' },
    { id: 3, name: 'Carlos López', email: 'carlos@example.com', joinedAt: '2024-03-25' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade-in">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Panel de Administración</h1>
          <p className="text-muted-foreground mt-1">Gestiona tus clientes y sus accesos</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
          <span>+</span> Registrar Nuevo Cliente
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="glass p-6 rounded-2xl border border-white/5">
          <p className="text-sm font-medium text-muted-foreground">Total Clientes</p>
          <h2 className="text-3xl font-bold text-primary mt-1">{mockClients.length}</h2>
        </div>
        <div className="glass p-6 rounded-2xl border border-white/5">
          <p className="text-sm font-medium text-muted-foreground">Activos Hoy</p>
          <h2 className="text-3xl font-bold text-green-500 mt-1">12</h2>
        </div>
        <div className="glass p-6 rounded-2xl border border-white/5">
          <p className="text-sm font-medium text-muted-foreground">Nuevos (Mes)</p>
          <h2 className="text-3xl font-bold text-purple-500 mt-1">5</h2>
        </div>
      </div>

      <div className="glass rounded-2xl border border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 border-b border-white/5">
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Fecha Registro</th>
                <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {mockClients.map((client) => (
                <tr key={client.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {client.name.charAt(0)}
                      </div>
                      <div className="ml-4 font-medium">{client.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{client.email}</td>
                  <td className="px-6 py-4 text-muted-foreground">{client.joinedAt}</td>
                  <td className="px-6 py-4">
                    <button className="text-primary hover:text-primary/80 font-medium">Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

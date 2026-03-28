export default function ClientDashboard() {
  return (
    <div className="p-8 max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
          Bienvenido, Cliente
        </h1>
        <p className="text-muted-foreground mt-2">Aquí puedes ver tus datos y servicios contratados</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass p-8 rounded-2xl border border-white/5 space-y-4">
          <h2 className="text-xl font-bold">Resumen de Servicios</h2>
          <div className="space-y-3">
            <div className="flex justify-between p-3 bg-white/5 rounded-lg border border-white/5">
              <span className="text-muted-foreground">Soporte técnico</span>
              <span className="text-green-500 font-bold">Activo</span>
            </div>
            <div className="flex justify-between p-3 bg-white/5 rounded-lg border border-white/5">
              <span className="text-muted-foreground">Hosting</span>
              <span className="text-green-500 font-bold">Activo</span>
            </div>
          </div>
        </div>

        <div className="glass p-8 rounded-2xl border border-white/5 space-y-4">
          <h2 className="text-xl font-bold">Acceso a Facturación</h2>
          <p className="text-muted-foreground">Consulta tus últimas facturas y estados de pago.</p>
          <button className="w-full py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-xl font-semibold transition-all">
            Ver Facturas
          </button>
        </div>

        <div className="glass p-8 rounded-2xl border border-white/5 space-y-4 md:col-span-2">
          <h2 className="text-xl font-bold">Tus Datos</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-muted-foreground">Nombre:</div>
            <div className="font-medium">Juan Pérez</div>
            <div className="text-muted-foreground">Email:</div>
            <div className="font-medium">juan@example.com</div>
            <div className="text-muted-foreground">Socio desde:</div>
            <div className="font-medium">20 de Marzo, 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}

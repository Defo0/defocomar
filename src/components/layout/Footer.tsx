import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-auto border-t-4 border-border bg-muted">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-accent-cyan mb-3">DEFO.com.ar</h3>
            <p className="text-sm text-muted-foreground">
              Hice esta plataforma para mí, para practicar yo. 
              Si a vos te sirve, bienvenido. Te quiero mucho.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-accent-cyan mb-3">Secciones</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/python" className="text-python hover:underline">🐍 Python</Link></li>
              <li><span className="text-muted-foreground">🐘 SQL (próximamente)</span></li>
              <li><span className="text-muted-foreground">🐧 Bash (próximamente)</span></li>
              <li><span className="text-muted-foreground">🐱 Git (próximamente)</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-accent-cyan mb-3">Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent-cyan transition-colors"
                >
                  📦 GitHub
                </a>
              </li>
              <li>
                <Link href="/perfil" className="hover:text-accent-cyan transition-colors">
                  👤 Mi Perfil
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-border text-center text-sm text-muted-foreground">
          <p>Hecho con ☕ y Claude a full</p>
          <p className="mt-1">© {new Date().getFullYear()} DEFO.com.ar</p>
        </div>
      </div>
    </footer>
  );
}

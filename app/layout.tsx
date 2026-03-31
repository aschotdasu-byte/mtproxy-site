import Link from 'next/link';

export const metadata = {
  title: 'MTProxy Site',
  description: 'Telegram proxy website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 20,
    background: 'rgba(255,255,255,0.92)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(0,0,0,0.08)',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: 1180,
    margin: '0 auto',
    padding: '0 20px',
  };

  const navLink: React.CSSProperties = {
    color: '#555',
    textDecoration: 'none',
    fontSize: 14,
  };

  const langBtnDark: React.CSSProperties = {
    border: '1px solid rgba(0,0,0,0.08)',
    background: '#111111',
    color: '#ffffff',
    borderRadius: 999,
    padding: '8px 14px',
    fontSize: 13,
    cursor: 'pointer',
  };

  const langBtnLight: React.CSSProperties = {
    border: '1px solid rgba(0,0,0,0.08)',
    background: '#ffffff',
    color: '#444444',
    borderRadius: 999,
    padding: '8px 14px',
    fontSize: 13,
    cursor: 'pointer',
  };

  return (
    <html lang="ru">
      <body
        style={{
          margin: 0,
          background: '#ffffff',
          color: '#111111',
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <header style={headerStyle}>
          <div
            style={{
              ...containerStyle,
              minHeight: 76,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 20,
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                textDecoration: 'none',
                color: '#111111',
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 14,
                  background: '#111111',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                }}
              >
                MT
              </div>
              <div style={{ fontWeight: 700, fontSize: 18 }}>MTProxy Site</div>
            </Link>

            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 22,
                flexWrap: 'wrap',
              }}
            >
              <Link href="/" style={navLink}>
                Главная
              </Link>
              <Link href="/proxy" style={navLink}>
                Прокси
              </Link>
              <Link href="/how" style={navLink}>
                Как подключить
              </Link>
              <Link href="/faq" style={navLink}>
                FAQ
              </Link>
              <Link href="/about" style={navLink}>
                О нас
              </Link>
              <Link href="/homescreen" style={navLink}>
                На экран
              </Link>
            </nav>

            <div
              style={{
                display: 'flex',
                gap: 8,
                padding: 4,
                borderRadius: 999,
                background: '#f5f5f5',
                border: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              <button style={langBtnDark}>RU</button>
              <button style={langBtnLight}>EN</button>
              <button style={langBtnLight}>FA</button>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}

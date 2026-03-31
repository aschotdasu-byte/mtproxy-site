import Link from 'next/link';

export default function HomePage() {
  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    margin: 0,
    background:
      'radial-gradient(circle at top, rgba(0,0,0,0.06), transparent 28%), #ffffff',
    color: '#111111',
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  const container: React.CSSProperties = {
    maxWidth: 1180,
    margin: '0 auto',
    padding: '0 20px',
  };

  const headerStyle: React.CSSProperties = {
    position: 'sticky',
    top: 0,
    zIndex: 20,
    background: 'rgba(255,255,255,0.92)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(0,0,0,0.08)',
  };

  const navLink: React.CSSProperties = {
    color: '#555',
    textDecoration: 'none',
    fontSize: 14,
  };

  const cardStyle: React.CSSProperties = {
    background: '#ffffff',
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: 28,
    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
  };

  const primaryBtn: React.CSSProperties = {
    background: '#111111',
    color: '#ffffff',
    border: 'none',
    borderRadius: 16,
    padding: '14px 22px',
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  };

  const secondaryBtn: React.CSSProperties = {
    background: '#ffffff',
    color: '#111111',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: 16,
    padding: '14px 22px',
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  };

  return (
    <main style={pageStyle}>
      <header style={headerStyle}>
        <div
          style={{
            ...container,
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
              color: '#111',
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
            <button
              style={{
                border: '1px solid rgba(0,0,0,0.08)',
                background: '#111111',
                color: '#ffffff',
                borderRadius: 999,
                padding: '8px 14px',
                fontSize: 13,
                cursor: 'pointer',
              }}
            >
              RU
            </button>
            <button
              style={{
                border: '1px solid rgba(0,0,0,0.08)',
                background: '#ffffff',
                color: '#444444',
                borderRadius: 999,
                padding: '8px 14px',
                fontSize: 13,
                cursor: 'pointer',
              }}
            >
              EN
            </button>
            <button
              style={{
                border: '1px solid rgba(0,0,0,0.08)',
                background: '#ffffff',
                color: '#444444',
                borderRadius: 999,
                padding: '8px 14px',
                fontSize: 13,
                cursor: 'pointer',
              }}
            >
              FA
            </button>
          </div>
        </div>
      </header>

      <section style={{ ...container, paddingTop: 72, paddingBottom: 60 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: 32,
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 14px',
                borderRadius: 999,
                border: '1px solid rgba(0,0,0,0.08)',
                background: '#fafafa',
                color: '#555',
                fontSize: 14,
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: '#111111',
                  display: 'inline-block',
                }}
              />
              Сервер в Нидерландах
            </div>

            <h1
              style={{
                fontSize: 'clamp(42px, 7vw, 76px)',
                lineHeight: 1,
                margin: '0 0 18px',
                letterSpacing: '-0.04em',
              }}
            >
              Прокси для Telegram
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: '#555',
                maxWidth: 720,
                margin: '0 0 28px',
              }}
            >
              Быстрый и стабильный доступ через сервер в Нидерландах. Теперь у
              сайта есть отдельные страницы для прокси, подключения, FAQ, раздела
              «О нас» и добавления ярлыка на экран.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/proxy" style={primaryBtn}>
                Перейти к прокси
              </Link>
              <Link href="/how" style={secondaryBtn}>
                Как подключить
              </Link>
            </div>

            <div
              style={{
                display: 'flex',
                gap: 28,
                flexWrap: 'wrap',
                marginTop: 34,
              }}
            >
              <div>
                <div style={{ fontSize: 28, fontWeight: 700 }}>1</div>
                <div style={{ color: '#666', fontSize: 14 }}>Server</div>
              </div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 700 }}>24/7</div>
                <div style={{ color: '#666', fontSize: 14 }}>Uptime</div>
              </div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 700 }}>5</div>
                <div style={{ color: '#666', fontSize: 14 }}>Pages</div>
              </div>
            </div>
          </div>

          <div style={{ ...cardStyle, padding: 26, alignSelf: 'start' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 16,
                alignItems: 'start',
              }}
            >
              <div>
                <div style={{ fontSize: 24, fontWeight: 700 }}>
                  Нидерланды · Amsterdam
                </div>
                <div style={{ marginTop: 6, color: '#777', fontSize: 14 }}>
                  NL-1
                </div>
              </div>
              <div
                style={{
                  padding: '8px 12px',
                  borderRadius: 999,
                  background: '#111111',
                  color: '#ffffff',
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                MTProto
              </div>
            </div>

            <div style={{ marginTop: 24, display: 'grid', gap: 14 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingBottom: 12,
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <span style={{ color: '#666' }}>Пинг</span>
                <strong>35 ms</strong>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingBottom: 12,
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <span style={{ color: '#666' }}>Статус</span>
                <strong>Онлайн</strong>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ color: '#666' }}>Протокол</span>
                <strong>MTProto</strong>
              </div>
            </div>

            <Link
              href="/proxy"
              style={{
                ...primaryBtn,
                width: '100%',
                marginTop: 24,
                textAlign: 'center',
                boxSizing: 'border-box',
              }}
            >
              Открыть страницу прокси
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

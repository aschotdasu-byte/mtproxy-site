import Link from 'next/link';

export default function FaqPage() {
  const container: React.CSSProperties = {
    maxWidth: 1000,
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  return (
    <main style={{ minHeight: '100vh', background: '#fff', color: '#111' }}>
      <div style={container}>
        <Link href="/" style={{ color: '#555', textDecoration: 'none' }}>
          ← На главную
        </Link>

        <h1 style={{ fontSize: 44, marginTop: 20 }}>FAQ</h1>

        <div style={{ display: 'grid', gap: 14, marginTop: 24 }}>
          <details
            style={{
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: 18,
              padding: '18px 20px',
            }}
          >
            <summary style={{ cursor: 'pointer', fontWeight: 700 }}>
              Это бесплатный прокси?
            </summary>
            <p style={{ color: '#666', marginTop: 12 }}>
              Да, сейчас доступен один сервер для подключения.
            </p>
          </details>

          <details
            style={{
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: 18,
              padding: '18px 20px',
            }}
          >
            <summary style={{ cursor: 'pointer', fontWeight: 700 }}>
              Работает ли на телефоне?
            </summary>
            <p style={{ color: '#666', marginTop: 12 }}>
              Да, сайт и прокси рассчитаны на мобильные устройства.
            </p>
          </details>

          <details
            style={{
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: 18,
              padding: '18px 20px',
            }}
          >
            <summary style={{ cursor: 'pointer', fontWeight: 700 }}>
              Можно ли добавить ещё серверы?
            </summary>
            <p style={{ color: '#666', marginTop: 12 }}>
              Да, потом можно сделать несколько карточек с разными странами.
            </p>
          </details>
        </div>
      </div>
    </main>
  );
}

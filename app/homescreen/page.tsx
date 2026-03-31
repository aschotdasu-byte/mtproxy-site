import Link from 'next/link';

export default function HomeScreenPage() {
  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    margin: 0,
    background: 'linear-gradient(180deg, #071427 0%, #06101f 100%)',
    color: '#ffffff',
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  const container: React.CSSProperties = {
    maxWidth: 900,
    margin: '0 auto',
    padding: '40px 20px 80px',
  };

  const backLink: React.CSSProperties = {
    color: '#9fb3c8',
    textDecoration: 'none',
    fontSize: 14,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: 52,
    lineHeight: 1.05,
    margin: '24px 0 12px',
    letterSpacing: '-0.04em',
  };

  const subtitleStyle: React.CSSProperties = {
    color: '#8fa6bf',
    fontSize: 18,
    margin: 0,
  };

  const sectionCard: React.CSSProperties = {
    background: 'rgba(29, 42, 58, 0.92)',
    color: '#ffffff',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 24,
    padding: 22,
    boxShadow: '0 10px 30px rgba(0,0,0,0.22)',
  };

  const stepCard: React.CSSProperties = {
    display: 'flex',
    gap: 14,
    alignItems: 'flex-start',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 18,
    padding: 18,
  };

  const badge: React.CSSProperties = {
    width: 30,
    height: 30,
    minWidth: 30,
    borderRadius: 999,
    background: '#2ea8ff',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 700,
    fontSize: 14,
    marginTop: 2,
  };

  const stepTitle: React.CSSProperties = {
    fontWeight: 700,
    fontSize: 18,
    margin: 0,
  };

  const stepText: React.CSSProperties = {
    color: '#9fb3c8',
    margin: '6px 0 0',
    lineHeight: 1.6,
    fontSize: 15,
  };

  return (
    <main style={pageStyle}>
      <div style={container}>
        <Link href="/" style={backLink}>
          ← На главную
        </Link>

        <h1 style={titleStyle}>Добавить на экран</h1>
        <p style={subtitleStyle}>Быстрый доступ к прокси одним нажатием</p>

        <div style={{ display: 'grid', gap: 18, marginTop: 34 }}>
          <section style={sectionCard}>
            <h2 style={{ marginTop: 0, marginBottom: 18, fontSize: 28 }}>
              iPhone / iPad (Safari)
            </h2>

            <div style={{ display: 'grid', gap: 12 }}>
              <div style={stepCard}>
                <div style={badge}>1</div>
                <div>
                  <p style={stepTitle}>Откройте сайт в Safari</p>
                  <p style={stepText}>
                    Именно в Safari — из Chrome или Firefox не получится.
                  </p>
                </div>
              </div>

              <div style={stepCard}>
                <div style={badge}>2</div>
                <div>
                  <p style={stepTitle}>Нажмите «Поделиться»</p>
                  <p style={stepText}>
                    Иконка с квадратом и стрелкой вверх внизу экрана.
                  </p>
                </div>
              </div>

              <div style={stepCard}>
                <div style={badge}>3</div>
                <div>
                  <p style={stepTitle}>Выберите «На экран Домой»</p>
                  <p style={stepText}>
                    Пролистайте список и нажмите. Подтвердите добавление.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section style={sectionCard}>
            <h2 style={{ marginTop: 0, marginBottom: 18, fontSize: 28 }}>
              Android (Chrome)
            </h2>

            <div style={{ display: 'grid', gap: 12 }}>
              <div style={stepCard}>
                <div style={badge}>1</div>
                <div>
                  <p style={stepTitle}>Откройте сайт в Chrome</p>
                  <p style={stepText}>
                    Или в другом Chromium-браузере.
                  </p>
                </div>
              </div>

              <div style={stepCard}>
                <div style={badge}>2</div>
                <div>
                  <p style={stepTitle}>Откройте меню</p>
                  <p style={stepText}>
                    Три точки в правом верхнем углу браузера.
                  </p>
                </div>
              </div>

              <div style={stepCard}>
                <div style={badge}>3</div>
                <div>
                  <p style={stepTitle}>Нажмите «Добавить на главный экран»</p>
                  <p style={stepText}>
                    Подтвердите — ярлык появится среди приложений.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

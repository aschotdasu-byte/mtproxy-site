import Link from 'next/link';

export default function HomeScreenPage() {
  const container: React.CSSProperties = {
    maxWidth: 900,
    margin: '0 auto',
    padding: '40px 20px 70px',
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  const sectionCard: React.CSSProperties = {
    background: '#1d2a3a',
    color: '#fff',
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
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #071427 0%, #06101f 100%)',
        color: '#fff',
      }}
    >
      <div style={container}>
        <Link href="/" style={{ color: '#9fb3c8', textDecoration: 'none' }}>
          ← На главную
        </Link>

        <div style={{ marginTop: 30, marginBottom: 28 }}>
          <h1 style={{ fontSize: 48, margin: 0 }}>Добавить на экран</h1>
          <p style={{ color: '#8fa6bf', fontSize: 18, marginTop: 12 }}>
            Быстрый доступ к прокси одним нажатием
          </p>
        </div>

        <div style={{ display: 'grid', gap: 18 }}>
          <section style={sectionCard}>
            <h2 style={{ marginTop: 0 }}>iPhone / iPad (Safari)</h2>

            <div style={{ display: 'grid', gap: 12 }}>
              <div style={stepCard}>
                <div style={badge}>1</div>
                <div>
                  <div style={{ fontWeight: 700 }}>Откройте сайт в Safari</div>
                  <div style={{ color: '#9fb3c8', marginTop: 6 }}>
                    Именно в Safari — из Chrome или Firefox не получится.
                  </div>
                </div>
              </div>

              <div style={stepCard}>
                <div style={badge}>2</div>
                <div>
                  <div style={{ fontWeight: 700 }}>Нажмите «Поделиться»</div>
                  <div style={{ color: '#9fb3c8', marginTop: 6 }}>
                    Иконка с квадратом и стрелкой вверх внизу экрана.
                  </div>
                </div>
              </div>

              <div style={stepCard}>
                <div style={badge}>3</div>
                <div>
                  <div style={{ fontWeight: 700 }}>Выберите «На экран Домой»</div>
                  <div style={{ color: '#9fb3c8', marginTop: 6 }}>
                    Пролистайте список и нажмите. Подтвердите добавление.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section style={sectionCard}>
            <h2 style={{ marginTop: 0 }}>Android (Chrome)</h2>

            <div style={{ display: 'grid', gap: 12 }}>
              <div style={stepCard}>
                <div style={badge}>1</div>
                <div>
                  <div style={{ fontWeight: 700 }}>Откройте сайт в Chrome</div>
                  <div style={{ color: '#9fb3c8', marginTop: 6 }}>
                    Или в другом Chromium-браузере.
                  </div>
                </div>
              </div>

              <div style={stepCard}>
                <div style={badge}>2</div>
                <div>
                  <div style={{ fontWeight: 700 }}>Откройте меню</div>
                  <div style={{ color: '#9fb3c8', marginTop: 6 }}>
                    Три точки в правом верхнем углу.
                  </div>
                </div>
              </div>

              <div style={stepCard}>
                <div style={badge}>3</div>
                <div>
                  <div style={{ fontWeight: 700 }}>
                    Нажмите «Добавить на главный экран»
                  </div>
                  <div style={{ color: '#9fb3c8', marginTop: 6 }}>
                    Подтвердите — ярлык появится среди приложений.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

"use client";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="en">
            <head>
                <title>Something went wrong</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
                <style>{`
                    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
                    body {
                        font-family: 'Inter', system-ui, sans-serif;
                        background: #0a0a0f;
                        color: #e2e8f0;
                        min-height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                    }
                    .bg-blur {
                        position: fixed; inset: 0; z-index: 0;
                        background:
                            radial-gradient(ellipse 80% 60% at 20% 20%, rgba(139,92,246,0.15) 0%, transparent 60%),
                            radial-gradient(ellipse 60% 50% at 80% 80%, rgba(236,72,153,0.12) 0%, transparent 60%),
                            radial-gradient(ellipse 50% 40% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 60%);
                    }
                    .card {
                        position: relative; z-index: 1;
                        background: rgba(255,255,255,0.04);
                        border: 1px solid rgba(255,255,255,0.1);
                        border-radius: 20px;
                        padding: 3rem 2.5rem;
                        max-width: 460px;
                        width: 90%;
                        text-align: center;
                        backdrop-filter: blur(20px);
                        box-shadow: 0 0 0 1px rgba(255,255,255,0.05), 0 32px 64px rgba(0,0,0,0.4);
                    }
                    .icon {
                        font-size: 4rem;
                        line-height: 1;
                        margin-bottom: 1.25rem;
                        display: block;
                        filter: drop-shadow(0 0 20px rgba(236,72,153,0.4));
                    }
                    h1 {
                        font-size: 1.6rem;
                        font-weight: 700;
                        background: linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        margin-bottom: 0.75rem;
                        line-height: 1.3;
                    }
                    .subtitle {
                        color: rgba(148,163,184,0.8);
                        font-size: 0.92rem;
                        line-height: 1.6;
                        margin-bottom: 0.5rem;
                    }
                    .digest {
                        font-size: 0.75rem;
                        color: rgba(100,116,139,0.7);
                        font-family: monospace;
                        background: rgba(255,255,255,0.04);
                        border: 1px solid rgba(255,255,255,0.07);
                        border-radius: 6px;
                        padding: 0.35rem 0.7rem;
                        display: inline-block;
                        margin-bottom: 2rem;
                    }
                    .actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
                    .btn-primary {
                        background: linear-gradient(135deg, #7c3aed, #6d28d9);
                        color: #fff;
                        border: none;
                        border-radius: 10px;
                        padding: 0.65rem 1.5rem;
                        font-size: 0.9rem;
                        font-weight: 600;
                        cursor: pointer;
                        font-family: inherit;
                        transition: all 0.2s;
                        box-shadow: 0 4px 15px rgba(124,58,237,0.35);
                    }
                    .btn-primary:hover {
                        background: linear-gradient(135deg, #8b5cf6, #7c3aed);
                        transform: translateY(-1px);
                        box-shadow: 0 6px 20px rgba(124,58,237,0.5);
                    }
                    .btn-ghost {
                        background: rgba(255,255,255,0.06);
                        color: #94a3b8;
                        border: 1px solid rgba(255,255,255,0.1);
                        border-radius: 10px;
                        padding: 0.65rem 1.5rem;
                        font-size: 0.9rem;
                        font-weight: 500;
                        cursor: pointer;
                        font-family: inherit;
                        text-decoration: none;
                        display: inline-flex;
                        align-items: center;
                        transition: all 0.2s;
                    }
                    .btn-ghost:hover {
                        background: rgba(255,255,255,0.1);
                        color: #e2e8f0;
                    }
                    .divider {
                        height: 1px;
                        background: rgba(255,255,255,0.07);
                        margin: 1.5rem 0;
                    }
                `}</style>
            </head>
            <body>
                <div className="bg-blur" />
                <div className="card">
                    <span className="icon">⚠️</span>
                    <h1>Something went wrong</h1>
                    <p className="subtitle">
                        {error.message || "An unexpected error occurred. Please try again or return to the home page."}
                    </p>
                    {error.digest && (
                        <code className="digest">Error ID: {error.digest}</code>
                    )}
                    <div className="divider" />
                    <div className="actions">
                        <button onClick={() => reset()} className="btn-primary">
                            Try again
                        </button>
                        <a href="/" className="btn-ghost">
                            Go home
                        </a>
                    </div>
                </div>
            </body>
        </html>
    );
}
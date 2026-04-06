import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <div className="text-8xl mb-6 select-none">🔍</div>
                <h1 className="text-6xl font-black text-primary mb-2">404</h1>
                <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
                <p className="text-base-content/60 mb-8 leading-relaxed">
                    The skill you&apos;re looking for doesn&apos;t exist or has been made private.
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                    <Link href="/skills" className="btn btn-primary">
                        Browse Skills
                    </Link>
                    <Link href="/" className="btn btn-ghost">
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
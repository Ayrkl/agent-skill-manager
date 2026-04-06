import Link from "next/link";

export default function NotFound() {
    return (
        <section className="p-4 max-w-md mx-auto text-center brder brder-primary rounded">
            <h2>404 - Page Not Found</h2>
            <Link href="/skills" className="btn btn-primary">Return Home</Link>
        </section>
    );
}
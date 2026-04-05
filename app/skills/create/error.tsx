"use client"

export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="text-center py-16">
            <h2> Somting went wrong!</h2>
            <p>{error.message}</p>
            <button onClick={reset} className="btn btn-primary">Try again</button>
        </div>
    );
}
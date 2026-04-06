export default function SkillLoading() {
    return (
        <div className="p-6 max-w-d-md mx-auto-base-200">
            {
                [1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="card bg-base-200">
                        <div className="skeleton h-6 w-3/4"></div>
                        <div className="skeleton h-4 w-full mt-2"></div>
                    </div>
                ))}
        </div>
    )
}

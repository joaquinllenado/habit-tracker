export default function FeatureCard({ title, description } : {title: string, description: string}) {
    return(
        <div className="flex flex-col items-start justify-center text-left gap-2 border p-10 rounded-lg bg-card shadow-lg hover:shadow-xl hover:border-purple-500 group">
            <p className="text-xl text-foreground font-semibold text-left group-hover:text-purple-500">{title}</p>
            <p className="text-md text-muted-foreground">{description}</p>
        </div>
    )
}
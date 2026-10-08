import ResourceCard from './resource-card'
import { resources } from '@/lib/resources'

export default function ResourcesPage() {
    return (
        <section className="grid">
            {resources.map((r) => (
                <ResourceCard
                    key={r.id}
                    resource={r}
                    popular={r.capacity > 20}
                />
            ))}
        </section>
    )
}​

export const metadata = {
    title: 'Resources',
}
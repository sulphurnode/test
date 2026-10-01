import Link from 'next/link'
import type {Resource } from '@/lib/resources'

type Props = {resource: Resource; popular?: boolean}
export default function ResourceCard ({resource, popular}: Props){
    return(
        <article className ="card">
            <h2> {resource.name}</h2>
            <P>{resource.capacity} seats</P>
            {popular && <p>popular this week </p>}
            <Link href ={'/resources/${resource.id}'}>view</Link>
        </article>
    )
}
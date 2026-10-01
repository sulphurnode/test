import { notFound } from 'next/navigation'
import { getResource } from '@/lib/resources'

export default async function ResourcePage( props: PageProps <'/resources/[id]'>

){
    const{id} = await props.params //'g12'
    const resources = getResource(id)
    if (!resources) notFound()
        return <h1>{resource.Name}</h1>
    
}
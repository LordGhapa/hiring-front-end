import { useStateContext } from '@/context/ContextProvider'
import Card from './card'
import { useSearchParams } from 'react-router-dom'

export default function CardsContainer() {
  const data = useStateContext()
  const [qs] = useSearchParams()
  const searchParams = qs.get('search')?.toLowerCase() ?? ''

  const filterData =
    data.filter(r => r.name.toLowerCase()?.includes(searchParams)) ?? data

  console.log(qs.get('search'))
  console.log(filterData)

  return (
    <div className="flex gap-4 flex-wrap ">
      {filterData && filterData.map(item => <Card key={item.id} {...item} />)}
      {searchParams && filterData.length === 0 && <p>Não encontrado</p>}
    </div>
  )
}
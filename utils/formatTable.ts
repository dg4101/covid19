import dayjs from 'dayjs'

const headers = [
<<<<<<< HEAD
  { text: '公表日', value: '公表日' },
=======
  { text: '項番', value: '項番' },
  { text: '日付', value: '日付' },
>>>>>>> f74b1c1624cf67178e8153bb3ffbc2fd6d34cb5e
  { text: '居住地', value: '居住地' },
  { text: '年代', value: '年代' },
  { text: '性別', value: '性別' },
  { text: '退院', value: '退院', align: 'center' }
]

type DataType = {
<<<<<<< HEAD
  リリース日: string
=======
  No: number
  リリース日: Date
>>>>>>> f74b1c1624cf67178e8153bb3ffbc2fd6d34cb5e
  居住地: string | null
  年代: string | null
  性別: '男性' | '女性' | string
  退院: '◯' | null
  [key: string]: any
}

type TableDataType = {
<<<<<<< HEAD
  公表日: string
=======
  項番: number
  日付: string
>>>>>>> f74b1c1624cf67178e8153bb3ffbc2fd6d34cb5e
  居住地: DataType['居住地']
  年代: DataType['年代']
  性別: DataType['性別'] | '不明'
  退院: DataType['退院']
}

type TableDateType = {
  headers: typeof headers
  datasets: TableDataType[]
}

/**
 * Format for DataTable component
 *
 * @param data - Raw data
 */
export default (data: DataType[]) => {
  const tableDate: TableDateType = {
    headers,
    datasets: []
  }
  data.forEach(d => {
    const TableRow: TableDataType = {
<<<<<<< HEAD
      公表日: dayjs(d['リリース日']).format('MM/DD') ?? '不明',
      居住地: d['居住地'] ?? '調査中',
=======
      項番: d.No,
      日付: dayjs(d['リリース日']).format('MM/DD') ?? '不明',
      居住地: d['居住地'] ?? '不明',
>>>>>>> f74b1c1624cf67178e8153bb3ffbc2fd6d34cb5e
      年代: d['年代'] ?? '不明',
      性別: d['性別'] ?? '不明',
      退院: d['退院']
    }
    tableDate.datasets.push(TableRow)
  })
  tableDate.datasets.sort((a, b) => (a === b ? 0 : a < b ? 1 : -1))
  return tableDate
}

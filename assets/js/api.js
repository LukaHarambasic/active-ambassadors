import axios from 'axios'

const URL_GENERAL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSESlR3d7C6lqQpS2oNFuYyfZW_DRQ9vsG1dTMN3nAYahyjSs3wGY5j5nkZXlAl27haBbvFfzs8jPBX/pub?output=csv'
const URL_KIT =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSESlR3d7C6lqQpS2oNFuYyfZW_DRQ9vsG1dTMN3nAYahyjSs3wGY5j5nkZXlAl27haBbvFfzs8jPBX/pub?gid=183902468&single=true&output=csv'
const URL_EXPENSES =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSESlR3d7C6lqQpS2oNFuYyfZW_DRQ9vsG1dTMN3nAYahyjSs3wGY5j5nkZXlAl27haBbvFfzs8jPBX/pub?gid=0&single=true&output=csv'

const csv2json = (csv) => {
  const rows = csv.split('\n')
  const json = rows.map((row) => row.split(','))
  json.shift()
  return json
}

const fetchGeneral = async () => {
  const { data } = await axios.get(URL_GENERAL)
  const json = csv2json(data)
  return {
    lastUpdated: json[0][1]
  }
}

const fetchExpensesPerKitAndSum = async () => {
  const { data } = await axios.get(URL_KIT)
  const json = csv2json(data)
  const expenses = json.map((row) => {
    return {
      title: row[0],
      amount: parseFloat(row[1].replace(' €', ''))
    }
  })
  const sum = expenses.shift().amount
  return {
    expenses,
    sum
  }
}

const fetchExpenses = async () => {
  const { data } = await axios.get(URL_EXPENSES)
  const json = csv2json(data)
  return json.map((row) => {
    return {
      title: row[1],
      date: row[0],
      amount: row[2],
      link: !row[3].replace(/\s/g, '').length ? '' : row[3] // check if string only contains strings
    }
  })
}

export default { fetchGeneral, fetchExpensesPerKitAndSum, fetchExpenses }

import Axios from 'axios'

// Base
const AIRTABLE_BASE_URL = process.env.AIRTABLE_BASE_URL
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
const AIRTABLE_BASE = process.env.AIRTABLE_BASE
// Shipping Table
const AIRTABLE_SHIPPING_VIEW = process.env.AIRTABLE_SHIPPING_VIEW
const AIRTABLE_SHIPPING_TABLE = process.env.AIRTABLE_SHIPPING_TABLE
// Expenses Table
const AIRTABLE_EXPENSES_VIEW = process.env.AIRTABLE_EXPENSES_VIEW
const AIRTABLE_EXPENSES_TABLE = process.env.AIRTABLE_EXPENSES_TABLE
// Income Table
const AIRTABLE_INCOME_VIEW = process.env.AIRTABLE_INCOME_VIEW
const AIRTABLE_INCOME_TABLE = process.env.AIRTABLE_INCOME_TABLE
// DIY KIT Table
const AIRTABLE_DIY_VIEW = process.env.AIRTABLE_DIY_VIEW
const AIRTABLE_DIY_TABLE = process.env.AIRTABLE_DIY_TABLE

const AXIOS_CONFIG = {
  headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` }
}

// TODO: to helpers
/* Builds the URL for airtable requests */
const buildAirtableURL = (table, view) =>
  `${AIRTABLE_BASE_URL}/v0/${AIRTABLE_BASE}/${table}?view=${view}`

// TODO: to helpers
/* Makes the airtable requests */
const getAirtableRecords = async (table, view) => {
  const url = buildAirtableURL(table, view)
  const { data } = await Axios.get(url, AXIOS_CONFIG)
  return data.records
}

const round = (number) => (Math.round(number * 100) / 100).toFixed(2)

/* Fetch and calculate the numbers of ambassadors from airtable */
const fetchAmbassadorsSum = async () => {
  const records = await getAirtableRecords(
    AIRTABLE_SHIPPING_TABLE,
    AIRTABLE_SHIPPING_VIEW
  )
  return records.length
}

/* Fetch and transform expenses per diy kit and calculate diy kit sum from airtable */
const fetchExpensesPerKitAndSum = async () => {
  const records = await getAirtableRecords(
    AIRTABLE_DIY_TABLE,
    AIRTABLE_DIY_VIEW
  )
  const expenses = records.map((record) => {
    const fields = record.fields
    return {
      title: fields.Desc,
      amount: fields.Cost
    }
  })
  const sum = expenses.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    0
  )
  return {
    expenses,
    sum: round(sum)
  }
}

/* Fetch and transform expense data from airtable */
const fetchExpenses = async () => {
  const records = await getAirtableRecords(
    AIRTABLE_EXPENSES_TABLE,
    AIRTABLE_EXPENSES_VIEW
  )
  return records.map((record) => {
    const fields = record.fields
    return {
      title: fields.Item,
      date: fields.Date,
      amount: `${round(fields.Amount)}€`,
      link: fields.Link
    }
  })
}

/* Fetch and transform income data from airtable */
const fetchIncome = async () => {
  const records = await getAirtableRecords(
    AIRTABLE_INCOME_TABLE,
    AIRTABLE_INCOME_VIEW
  )
  return records.map((record) => {
    const fields = record.fields
    return {
      type: fields.Item,
      date: fields.Date,
      amount: `${round(fields.Amount)}€`
    }
  })
}

export default {
  fetchExpensesPerKitAndSum,
  fetchExpenses,
  fetchIncome,
  fetchAmbassadorsSum
}

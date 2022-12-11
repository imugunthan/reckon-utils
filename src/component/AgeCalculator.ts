import moment from 'moment'

export interface IAgeCalculatorProps {
  startDate: Date
  endDate: Date
}

export interface IAgeCalculationResuls {
  years: Number
  months: Number
  days: Number
}

const AgeCalculator = ({ startDate = new Date(), endDate = new Date() }: IAgeCalculatorProps): IAgeCalculationResuls | string => {

  //Split Date month and year from the date provided
  const firstDate = new Date(startDate).getDate()
  const firstMonth = new Date(startDate).getMonth()
  const firstYear = new Date(startDate).getFullYear()
  const lastDate = new Date(endDate).getDate()
  const lastMonth = new Date(endDate).getMonth()
  const lastYear = new Date(endDate).getFullYear()

  //Check the dates are valid or not
  if (isNaN(firstDate) || isNaN(firstMonth) || isNaN(firstYear)) return `startDate is not a valid date`;
  if (isNaN(lastDate) || isNaN(lastMonth) || isNaN(lastYear)) return `endDate is not a valid date`;

  //Convert into moment date format
  const a = moment([lastYear, lastMonth, lastDate])
  const b = moment([firstYear, firstMonth, firstDate])

  //Calculation the difference in years
  const years = a.diff(b, 'year')
  b.add(years, 'years')

  //Calculation the difference in months
  const months = a.diff(b, 'months')
  b.add(months, 'months')

  //Calculation the difference in days
  const days = a.diff(b, 'days')

  //Returing the calcualated difference
  return {
    years,
    months,
    days,
  }
}

export default AgeCalculator;
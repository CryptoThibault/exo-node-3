const axios = require('axios')

const main = async () => {
  try {
    const logcalcApi = async (path) => {
      const result = await axios.get(`http://localhost:3333${path}`)
      console.log(result.data.result)
    }
    await logcalcApi('/calc/add/1/2')
    await logcalcApi('/calc/sub/2/1')
    await logcalcApi('/calc/mul/2/2')
    await logcalcApi('/calc/div/2/2')
    await logcalcApi('/calc/mod/3/2')
  } catch (e) { }
}

main()
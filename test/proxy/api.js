const express = require("express")
const cors = require("cors")
const dummyApi = require("./dummy-data.json")

const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/persons", (req, res) => {
	try {
		const persons = dummyApi.persons

		res.status(200).send(persons)
	} catch (err) {
		throw err
	}
})

app.get("/countries", (req, res) => {
	try {
		const countries = dummyApi.countries

		res.status(200).send(countries)
	} catch (err) {
		throw err
	}
})

app.listen(port, () => console.log(`Test server running on port ${ port }`))
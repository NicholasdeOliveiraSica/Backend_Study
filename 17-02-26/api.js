import Express from 'express'

const app = Express()

app.listen(3001, () => {
    console.log('O servidor esta rodando na porta 3001')
})

app.get("/", (req, res) => {

})

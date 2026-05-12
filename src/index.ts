import { app } from './app.js'

const port = 3000
const run = async () =>  {
    app.listen(port, () =>  {
        console.log(`Server has started on port ${port}`)
    })
}

run()
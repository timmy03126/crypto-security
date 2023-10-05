let bcrypt = require(`bcryptjs`)

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && bcrypt.compareSync(password, users[i].password)) {
          res.status(200).send(users[i])
        } else {
      
      res.status(400).send("User not found.")
        }
    }
    },

    register: (req, res) => {

      let { username, email, firstName, lastName, password, confrimPassword } = req.body

      let hashedPassword = bcrypt.hashSync(password, 10)

      newUser = {
        username,
        email,
        firstName,
        lastName,
        password: hashedPassword
    }

        //console.log('Registering User')
        //console.log(req.body)
        res.status(200).send(newUser)
    },
}
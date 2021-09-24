import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('sqlite::memory:')

export const User = sequelize.define(
  'User',
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {}
)

export const Costumer = sequelize.define(
  'Costumer',
  {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cep: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    streetName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complement: {
      type: DataTypes.STRING,
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phones: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    emails: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {}
)

export const initDB = async () => {
  await sequelize.authenticate()
  console.log('Database has successfully connected')

  await User.sync({ force: true })
  await User.create({ username: 'admin', password: '123456', admin: true })
  await User.create({ username: 'comum', password: '123456', admin: false })

  await Costumer.sync({ force: true })
  await Costumer.create({
    fullName: 'Exemplo',
    cpf: 12345678910,
    cep: 12345678,
    streetName: 'Street Name',
    complement: 'Complement',
    neighborhood: 'Neighborhood',
    city: 'City Name',
    state: 'State Name',
    phones: 'Comercial,12345678910;Celular,123456789101;Comercial,12345678910',
    emails: 'email@email.com;other@email.com',
  })
}

export default sequelize

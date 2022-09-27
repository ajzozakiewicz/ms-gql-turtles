const getHiveToken = () => {
  const environment = process.env.ENVIRONMENT || 'NONE'

  switch (environment) {
    case 'production':
      return '59beb279222f14d8676b7d496986baaf'
    case 'staging':
      return '469ed4082f7308f452401c8f8d5017d2'
    case 'development':
      return '61c42f2f1883a6adf5024104df40a83a'
    default:
      return '61c42f2f1883a6adf5024104df40a83a'
  }
}

export default getHiveToken
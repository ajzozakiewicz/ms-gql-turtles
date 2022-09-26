export const error = () => (err: any, req: any, res: any, next: any) => {
  if (req && req.log) {
    req.log.error(err)
  } else {
    console.log(err)
  }

  res.status(err.status || 500)
  next(err)
}

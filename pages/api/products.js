const handler = async (req, res) => {
  console.log(req.method);
  return res.send({
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: req.body,
    }),
  });
};
export default handler;

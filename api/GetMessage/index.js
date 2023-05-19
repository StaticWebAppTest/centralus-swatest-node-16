module.exports = async function (context, req) {
  const date = "2023-05-19T12:15:53.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


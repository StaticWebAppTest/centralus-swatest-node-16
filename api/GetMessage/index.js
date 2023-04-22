module.exports = async function (context, req) {
  const date = "2023-04-22T21:07:17.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


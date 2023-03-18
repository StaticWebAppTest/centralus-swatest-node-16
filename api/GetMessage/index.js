module.exports = async function (context, req) {
  const date = "2023-03-18T00:51:21.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


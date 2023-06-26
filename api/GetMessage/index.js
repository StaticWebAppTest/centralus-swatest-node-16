module.exports = async function (context, req) {
  const date = "2023-06-26T23:09:42.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


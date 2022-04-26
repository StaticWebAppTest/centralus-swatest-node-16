module.exports = async function (context, req) {
  const date = "2022-04-26T19:08:33.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


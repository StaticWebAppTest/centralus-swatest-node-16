module.exports = async function (context, req) {
  const date = "2023-04-26T13:12:27.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


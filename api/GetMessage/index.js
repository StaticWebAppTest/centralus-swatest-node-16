module.exports = async function (context, req) {
  const date = "2024-02-07T22:08:17.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


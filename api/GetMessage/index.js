module.exports = async function (context, req) {
  const date = "2024-07-17T20:10:55.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


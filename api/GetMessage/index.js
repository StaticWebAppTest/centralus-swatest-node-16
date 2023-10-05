module.exports = async function (context, req) {
  const date = "2023-10-05T22:08:14.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


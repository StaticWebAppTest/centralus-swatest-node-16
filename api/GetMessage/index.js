module.exports = async function (context, req) {
  const date = "2024-04-09T08:11:58.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


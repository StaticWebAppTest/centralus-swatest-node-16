module.exports = async function (context, req) {
  const date = "2024-04-12T02:20:52.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


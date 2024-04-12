module.exports = async function (context, req) {
  const date = "2024-04-12T03:11:05.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2025-01-12T12:20:29.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


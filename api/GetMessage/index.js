module.exports = async function (context, req) {
  const date = "2026-05-24T06:31:04.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


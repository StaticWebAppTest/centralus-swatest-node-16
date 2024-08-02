module.exports = async function (context, req) {
  const date = "2024-08-02T09:11:53.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


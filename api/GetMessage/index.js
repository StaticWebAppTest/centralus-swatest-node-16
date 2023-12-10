module.exports = async function (context, req) {
  const date = "2023-12-10T00:47:30.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


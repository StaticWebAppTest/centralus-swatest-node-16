module.exports = async function (context, req) {
  const date = "2023-05-06T17:07:12.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2023-08-17T08:11:07.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


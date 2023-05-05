module.exports = async function (context, req) {
  const date = "2023-05-05T14:08:05.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


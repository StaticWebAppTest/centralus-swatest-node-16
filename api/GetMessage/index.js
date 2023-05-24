module.exports = async function (context, req) {
  const date = "2023-05-24T09:09:00.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2023-05-08T03:09:19.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


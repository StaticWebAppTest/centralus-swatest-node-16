module.exports = async function (context, req) {
  const date = "2024-05-08T07:11:33.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


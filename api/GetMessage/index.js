module.exports = async function (context, req) {
  const date = "2023-12-03T07:08:01.137Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


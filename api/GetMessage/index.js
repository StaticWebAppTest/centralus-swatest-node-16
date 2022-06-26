module.exports = async function (context, req) {
  const date = "2022-06-26T12:18:04.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


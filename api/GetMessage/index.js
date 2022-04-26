module.exports = async function (context, req) {
  const date = "2022-04-26T17:17:29.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2022-12-26T12:16:51.891Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


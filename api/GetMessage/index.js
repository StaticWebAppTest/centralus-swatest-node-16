module.exports = async function (context, req) {
  const date = "2022-12-21T12:17:24.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


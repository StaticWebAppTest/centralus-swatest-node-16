module.exports = async function (context, req) {
  const date = "2023-07-08T12:17:37.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


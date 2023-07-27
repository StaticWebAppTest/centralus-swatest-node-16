module.exports = async function (context, req) {
  const date = "2023-07-27T03:08:37.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


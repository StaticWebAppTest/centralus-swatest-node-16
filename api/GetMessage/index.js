module.exports = async function (context, req) {
  const date = "2022-05-13T03:43:49.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


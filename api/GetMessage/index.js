module.exports = async function (context, req) {
  const date = "2022-05-31T00:57:33.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


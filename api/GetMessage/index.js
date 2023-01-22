module.exports = async function (context, req) {
  const date = "2023-01-22T22:08:32.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


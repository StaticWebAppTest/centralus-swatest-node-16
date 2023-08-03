module.exports = async function (context, req) {
  const date = "2023-08-03T00:47:49.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


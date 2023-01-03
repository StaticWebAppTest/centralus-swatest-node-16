module.exports = async function (context, req) {
  const date = "2023-01-03T00:48:57.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


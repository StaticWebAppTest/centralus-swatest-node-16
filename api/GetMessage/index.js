module.exports = async function (context, req) {
  const date = "2024-01-19T22:08:39.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


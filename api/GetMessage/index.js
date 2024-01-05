module.exports = async function (context, req) {
  const date = "2024-01-05T22:08:40.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


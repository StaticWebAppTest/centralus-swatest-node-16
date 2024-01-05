module.exports = async function (context, req) {
  const date = "2024-01-05T07:08:44.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


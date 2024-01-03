module.exports = async function (context, req) {
  const date = "2024-01-03T07:08:34.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


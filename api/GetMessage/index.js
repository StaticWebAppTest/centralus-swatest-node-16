module.exports = async function (context, req) {
  const date = "2024-01-07T22:08:55.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


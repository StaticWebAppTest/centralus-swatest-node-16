module.exports = async function (context, req) {
  const date = "2024-05-03T21:08:17.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


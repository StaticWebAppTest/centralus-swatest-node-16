module.exports = async function (context, req) {
  const date = "2025-01-26T11:08:31.044Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2025-01-26T13:12:34.524Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


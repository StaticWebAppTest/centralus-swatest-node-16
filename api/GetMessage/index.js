module.exports = async function (context, req) {
  const date = "2025-01-26T00:57:33.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


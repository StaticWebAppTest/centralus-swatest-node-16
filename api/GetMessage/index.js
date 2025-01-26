module.exports = async function (context, req) {
  const date = "2025-01-26T18:14:33.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


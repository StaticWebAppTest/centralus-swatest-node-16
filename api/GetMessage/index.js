module.exports = async function (context, req) {
  const date = "2025-01-26T10:11:15.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


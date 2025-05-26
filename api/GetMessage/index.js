module.exports = async function (context, req) {
  const date = "2025-05-26T14:13:26.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


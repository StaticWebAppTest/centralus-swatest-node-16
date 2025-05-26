module.exports = async function (context, req) {
  const date = "2025-05-26T18:17:36.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2025-01-18T22:09:42.273Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


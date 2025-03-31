module.exports = async function (context, req) {
  const date = "2025-03-31T18:17:39.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


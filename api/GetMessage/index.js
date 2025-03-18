module.exports = async function (context, req) {
  const date = "2025-03-18T18:17:38.851Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


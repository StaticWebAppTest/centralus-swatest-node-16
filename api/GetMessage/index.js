module.exports = async function (context, req) {
  const date = "2025-03-26T15:13:56.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


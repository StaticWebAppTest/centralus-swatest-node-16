module.exports = async function (context, req) {
  const date = "2025-02-26T02:18:38.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


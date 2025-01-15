module.exports = async function (context, req) {
  const date = "2025-01-15T08:14:59.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


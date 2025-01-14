module.exports = async function (context, req) {
  const date = "2025-01-14T23:10:37.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


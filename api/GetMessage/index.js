module.exports = async function (context, req) {
  const date = "2025-02-27T12:23:33.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


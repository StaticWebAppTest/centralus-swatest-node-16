module.exports = async function (context, req) {
  const date = "2025-01-25T10:11:02.683Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


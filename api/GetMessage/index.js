module.exports = async function (context, req) {
  const date = "2025-02-22T16:12:14.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


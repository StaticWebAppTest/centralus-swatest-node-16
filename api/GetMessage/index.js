module.exports = async function (context, req) {
  const date = "2025-03-25T21:11:42.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


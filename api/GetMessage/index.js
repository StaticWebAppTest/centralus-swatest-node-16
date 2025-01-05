module.exports = async function (context, req) {
  const date = "2025-01-05T15:10:20.297Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


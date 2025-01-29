module.exports = async function (context, req) {
  const date = "2025-01-29T14:10:56.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


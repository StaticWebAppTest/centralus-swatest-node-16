module.exports = async function (context, req) {
  const date = "2025-06-29T06:18:58.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


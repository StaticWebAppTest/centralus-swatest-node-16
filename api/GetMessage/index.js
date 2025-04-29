module.exports = async function (context, req) {
  const date = "2025-04-29T18:18:35.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


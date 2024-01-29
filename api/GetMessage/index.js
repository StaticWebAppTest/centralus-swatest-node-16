module.exports = async function (context, req) {
  const date = "2024-01-29T00:41:43.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


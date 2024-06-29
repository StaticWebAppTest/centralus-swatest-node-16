module.exports = async function (context, req) {
  const date = "2024-06-29T17:08:35.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


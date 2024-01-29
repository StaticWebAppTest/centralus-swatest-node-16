module.exports = async function (context, req) {
  const date = "2024-01-29T02:15:34.204Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


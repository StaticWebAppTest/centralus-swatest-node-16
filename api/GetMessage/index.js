module.exports = async function (context, req) {
  const date = "2025-01-25T19:07:58.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


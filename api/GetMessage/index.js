module.exports = async function (context, req) {
  const date = "2025-01-25T07:09:58.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


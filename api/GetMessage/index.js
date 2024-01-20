module.exports = async function (context, req) {
  const date = "2024-01-20T20:09:19.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


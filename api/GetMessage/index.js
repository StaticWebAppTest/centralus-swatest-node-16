module.exports = async function (context, req) {
  const date = "2025-04-03T12:25:04.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2025-01-12T22:10:15.843Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


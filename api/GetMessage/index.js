module.exports = async function (context, req) {
  const date = "2025-01-08T08:15:40.814Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


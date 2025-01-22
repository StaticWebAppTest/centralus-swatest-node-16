module.exports = async function (context, req) {
  const date = "2025-01-22T22:10:40.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


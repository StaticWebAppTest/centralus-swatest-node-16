module.exports = async function (context, req) {
  const date = "2025-08-22T08:18:21.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


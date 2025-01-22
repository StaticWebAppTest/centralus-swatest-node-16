module.exports = async function (context, req) {
  const date = "2025-01-22T02:13:53.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


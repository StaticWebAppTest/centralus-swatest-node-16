module.exports = async function (context, req) {
  const date = "2025-06-05T12:27:41.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


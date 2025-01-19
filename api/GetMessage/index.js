module.exports = async function (context, req) {
  const date = "2025-01-19T00:59:47.593Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


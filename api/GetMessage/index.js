module.exports = async function (context, req) {
  const date = "2025-01-03T06:16:31.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


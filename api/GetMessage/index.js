module.exports = async function (context, req) {
  const date = "2025-03-06T12:23:58.833Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


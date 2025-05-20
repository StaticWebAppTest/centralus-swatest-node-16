module.exports = async function (context, req) {
  const date = "2025-05-20T22:12:24.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


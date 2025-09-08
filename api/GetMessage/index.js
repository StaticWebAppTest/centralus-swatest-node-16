module.exports = async function (context, req) {
  const date = "2025-09-08T12:27:59.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


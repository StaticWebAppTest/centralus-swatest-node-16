module.exports = async function (context, req) {
  const date = "2025-01-27T10:12:54.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


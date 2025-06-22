module.exports = async function (context, req) {
  const date = "2025-06-22T22:12:24.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


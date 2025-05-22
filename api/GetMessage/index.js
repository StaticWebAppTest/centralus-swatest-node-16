module.exports = async function (context, req) {
  const date = "2025-05-22T12:27:46.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


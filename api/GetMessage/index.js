module.exports = async function (context, req) {
  const date = "2025-04-09T12:25:48.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


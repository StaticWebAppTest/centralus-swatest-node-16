module.exports = async function (context, req) {
  const date = "2025-09-25T15:13:47.056Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


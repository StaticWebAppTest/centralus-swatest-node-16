module.exports = async function (context, req) {
  const date = "2025-05-15T16:17:04.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


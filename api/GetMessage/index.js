module.exports = async function (context, req) {
  const date = "2025-11-25T12:29:36.469Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2025-02-20T03:16:35.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


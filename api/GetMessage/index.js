module.exports = async function (context, req) {
  const date = "2025-12-31T10:15:44.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


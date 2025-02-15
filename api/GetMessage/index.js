module.exports = async function (context, req) {
  const date = "2025-02-15T10:10:47.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


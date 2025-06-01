module.exports = async function (context, req) {
  const date = "2025-06-01T12:24:41.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


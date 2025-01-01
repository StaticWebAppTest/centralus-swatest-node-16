module.exports = async function (context, req) {
  const date = "2025-01-01T15:11:37.840Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


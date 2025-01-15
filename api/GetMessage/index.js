module.exports = async function (context, req) {
  const date = "2025-01-15T00:56:06.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


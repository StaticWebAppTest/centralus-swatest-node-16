module.exports = async function (context, req) {
  const date = "2025-12-20T16:16:34.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


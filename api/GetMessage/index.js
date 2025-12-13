module.exports = async function (context, req) {
  const date = "2025-12-13T16:16:36.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


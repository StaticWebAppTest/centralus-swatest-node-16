module.exports = async function (context, req) {
  const date = "2025-01-20T06:16:57.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


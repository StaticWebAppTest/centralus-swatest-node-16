module.exports = async function (context, req) {
  const date = "2025-01-13T03:21:22.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


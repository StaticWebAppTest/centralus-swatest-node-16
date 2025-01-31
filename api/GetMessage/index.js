module.exports = async function (context, req) {
  const date = "2025-01-31T06:16:22.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


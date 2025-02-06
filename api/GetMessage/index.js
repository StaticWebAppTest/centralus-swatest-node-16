module.exports = async function (context, req) {
  const date = "2025-02-06T16:13:22.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


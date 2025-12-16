module.exports = async function (context, req) {
  const date = "2025-12-16T14:17:48.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


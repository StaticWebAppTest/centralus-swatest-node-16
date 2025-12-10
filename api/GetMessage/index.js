module.exports = async function (context, req) {
  const date = "2025-12-10T16:20:41.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


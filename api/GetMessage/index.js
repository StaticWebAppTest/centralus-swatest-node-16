module.exports = async function (context, req) {
  const date = "2025-04-16T12:25:41.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


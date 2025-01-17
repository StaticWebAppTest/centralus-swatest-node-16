module.exports = async function (context, req) {
  const date = "2025-01-17T10:12:22.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2025-01-31T11:09:18.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


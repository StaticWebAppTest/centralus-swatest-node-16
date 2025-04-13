module.exports = async function (context, req) {
  const date = "2025-04-13T17:10:27.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


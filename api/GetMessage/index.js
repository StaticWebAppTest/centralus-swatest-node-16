module.exports = async function (context, req) {
  const date = "2025-08-21T12:27:08.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


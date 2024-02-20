module.exports = async function (context, req) {
  const date = "2024-02-20T02:13:55.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


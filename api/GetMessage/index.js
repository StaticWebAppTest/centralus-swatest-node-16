module.exports = async function (context, req) {
  const date = "2024-11-06T09:12:58.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


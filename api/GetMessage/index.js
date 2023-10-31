module.exports = async function (context, req) {
  const date = "2023-10-31T00:41:28.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2023-12-27T22:08:25.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


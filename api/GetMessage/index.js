module.exports = async function (context, req) {
  const date = "2023-11-13T12:17:07.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


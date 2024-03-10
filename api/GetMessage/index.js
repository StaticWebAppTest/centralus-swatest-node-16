module.exports = async function (context, req) {
  const date = "2024-03-10T17:08:46.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


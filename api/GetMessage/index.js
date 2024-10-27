module.exports = async function (context, req) {
  const date = "2024-10-27T06:15:53.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


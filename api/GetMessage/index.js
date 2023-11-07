module.exports = async function (context, req) {
  const date = "2023-11-07T02:19:29.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


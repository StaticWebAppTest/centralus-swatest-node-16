module.exports = async function (context, req) {
  const date = "2023-09-26T16:11:27.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


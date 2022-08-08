module.exports = async function (context, req) {
  const date = "2022-08-08T22:11:58.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


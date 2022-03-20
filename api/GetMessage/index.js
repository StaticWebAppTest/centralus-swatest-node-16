module.exports = async function (context, req) {
  const date = "2022-03-20T17:10:35.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2022-07-08T23:10:54.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


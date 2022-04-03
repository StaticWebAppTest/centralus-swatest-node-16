module.exports = async function (context, req) {
  const date = "2022-04-03T23:09:56.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


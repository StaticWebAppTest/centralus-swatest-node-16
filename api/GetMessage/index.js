module.exports = async function (context, req) {
  const date = "2022-05-01T23:10:38.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


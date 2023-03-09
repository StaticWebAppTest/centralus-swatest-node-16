module.exports = async function (context, req) {
  const date = "2023-03-09T15:10:55.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2022-09-09T18:15:03.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


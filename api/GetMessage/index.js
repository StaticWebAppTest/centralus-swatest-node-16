module.exports = async function (context, req) {
  const date = "2023-04-13T04:10:45.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


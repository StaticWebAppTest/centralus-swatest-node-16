module.exports = async function (context, req) {
  const date = "2023-04-23T13:10:00.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


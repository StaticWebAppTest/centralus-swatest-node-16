module.exports = async function (context, req) {
  const date = "2022-11-23T12:20:21.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


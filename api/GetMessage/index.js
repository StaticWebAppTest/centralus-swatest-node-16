module.exports = async function (context, req) {
  const date = "2022-07-23T12:18:52.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


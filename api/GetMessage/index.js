module.exports = async function (context, req) {
  const date = "2023-07-23T05:08:11.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


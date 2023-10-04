module.exports = async function (context, req) {
  const date = "2023-10-04T21:09:03.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2023-10-12T18:11:55.930Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


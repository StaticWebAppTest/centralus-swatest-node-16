module.exports = async function (context, req) {
  const date = "2023-10-25T22:08:12.315Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2023-04-10T22:08:16.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


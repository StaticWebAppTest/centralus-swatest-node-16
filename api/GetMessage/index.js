module.exports = async function (context, req) {
  const date = "2023-07-16T22:08:17.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2024-01-16T22:08:52.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


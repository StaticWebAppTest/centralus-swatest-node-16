module.exports = async function (context, req) {
  const date = "2024-07-22T03:12:53.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


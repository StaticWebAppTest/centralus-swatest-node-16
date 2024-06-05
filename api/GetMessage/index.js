module.exports = async function (context, req) {
  const date = "2024-06-05T17:08:55.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


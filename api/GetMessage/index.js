module.exports = async function (context, req) {
  const date = "2024-11-05T21:10:41.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


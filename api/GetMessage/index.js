module.exports = async function (context, req) {
  const date = "2024-10-03T21:10:41.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2024-05-22T22:08:55.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


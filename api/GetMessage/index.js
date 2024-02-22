module.exports = async function (context, req) {
  const date = "2024-02-22T22:08:31.938Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


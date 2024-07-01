module.exports = async function (context, req) {
  const date = "2024-07-01T19:08:59.938Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


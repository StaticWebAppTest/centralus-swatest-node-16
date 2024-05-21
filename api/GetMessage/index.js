module.exports = async function (context, req) {
  const date = "2024-05-21T19:08:48.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


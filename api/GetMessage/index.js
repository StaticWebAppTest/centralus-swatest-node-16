module.exports = async function (context, req) {
  const date = "2024-07-02T00:47:51.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


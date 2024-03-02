module.exports = async function (context, req) {
  const date = "2024-03-02T22:08:32.317Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


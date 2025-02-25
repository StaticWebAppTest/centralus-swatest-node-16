module.exports = async function (context, req) {
  const date = "2025-02-25T22:11:27.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


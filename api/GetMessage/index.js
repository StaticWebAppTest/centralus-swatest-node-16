module.exports = async function (context, req) {
  const date = "2024-02-01T00:43:11.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


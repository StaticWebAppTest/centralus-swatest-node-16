module.exports = async function (context, req) {
  const date = "2024-02-15T00:41:43.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


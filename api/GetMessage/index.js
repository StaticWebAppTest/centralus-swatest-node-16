module.exports = async function (context, req) {
  const date = "2024-05-02T00:42:48.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


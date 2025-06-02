module.exports = async function (context, req) {
  const date = "2025-06-02T12:27:44.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


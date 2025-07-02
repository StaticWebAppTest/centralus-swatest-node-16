module.exports = async function (context, req) {
  const date = "2025-07-02T12:27:48.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2025-08-02T12:27:05.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


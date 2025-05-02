module.exports = async function (context, req) {
  const date = "2025-05-02T18:17:48.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


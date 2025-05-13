module.exports = async function (context, req) {
  const date = "2025-05-13T08:18:46.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


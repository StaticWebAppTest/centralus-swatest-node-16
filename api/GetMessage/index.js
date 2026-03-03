module.exports = async function (context, req) {
  const date = "2026-03-03T21:27:25.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


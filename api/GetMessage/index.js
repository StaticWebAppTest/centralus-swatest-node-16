module.exports = async function (context, req) {
  const date = "2026-02-27T14:34:46.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


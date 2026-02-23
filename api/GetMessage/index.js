module.exports = async function (context, req) {
  const date = "2026-02-23T16:47:10.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2026-02-23T19:54:08.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


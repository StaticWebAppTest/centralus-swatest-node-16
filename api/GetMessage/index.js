module.exports = async function (context, req) {
  const date = "2026-09-14T21:15:48.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


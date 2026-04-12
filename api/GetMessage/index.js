module.exports = async function (context, req) {
  const date = "2026-04-12T12:44:48.449Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


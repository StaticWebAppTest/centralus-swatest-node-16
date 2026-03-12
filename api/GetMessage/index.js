module.exports = async function (context, req) {
  const date = "2026-03-12T20:27:06.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


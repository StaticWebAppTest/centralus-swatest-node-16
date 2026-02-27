module.exports = async function (context, req) {
  const date = "2026-02-27T20:20:40.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


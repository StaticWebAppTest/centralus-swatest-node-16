module.exports = async function (context, req) {
  const date = "2026-01-27T07:22:06.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2026-05-16T22:38:36.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


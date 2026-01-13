module.exports = async function (context, req) {
  const date = "2026-01-13T12:32:52.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


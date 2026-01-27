module.exports = async function (context, req) {
  const date = "2026-01-27T14:23:20.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


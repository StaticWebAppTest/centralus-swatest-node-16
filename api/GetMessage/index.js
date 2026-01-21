module.exports = async function (context, req) {
  const date = "2026-01-21T15:24:27.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


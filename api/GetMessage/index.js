module.exports = async function (context, req) {
  const date = "2026-04-14T18:04:26.772Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


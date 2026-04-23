module.exports = async function (context, req) {
  const date = "2026-04-23T18:58:55.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


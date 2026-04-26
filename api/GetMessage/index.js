module.exports = async function (context, req) {
  const date = "2026-04-26T18:40:52.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


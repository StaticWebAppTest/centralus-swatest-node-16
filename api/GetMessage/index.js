module.exports = async function (context, req) {
  const date = "2026-05-23T18:01:38.029Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


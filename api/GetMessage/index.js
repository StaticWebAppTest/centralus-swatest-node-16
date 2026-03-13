module.exports = async function (context, req) {
  const date = "2026-03-13T09:32:26.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


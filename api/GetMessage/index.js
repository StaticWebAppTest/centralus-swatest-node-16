module.exports = async function (context, req) {
  const date = "2026-02-23T18:56:07.319Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


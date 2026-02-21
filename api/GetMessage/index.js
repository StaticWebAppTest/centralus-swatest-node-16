module.exports = async function (context, req) {
  const date = "2026-02-21T10:18:50.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2026-06-12T07:16:44.057Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


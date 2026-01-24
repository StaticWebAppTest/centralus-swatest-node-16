module.exports = async function (context, req) {
  const date = "2026-01-24T05:16:21.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


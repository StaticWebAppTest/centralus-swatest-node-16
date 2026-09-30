module.exports = async function (context, req) {
  const date = "2026-09-30T10:10:22.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


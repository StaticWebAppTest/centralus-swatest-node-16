module.exports = async function (context, req) {
  const date = "2026-08-23T10:15:20.268Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


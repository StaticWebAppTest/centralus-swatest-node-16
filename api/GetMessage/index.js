module.exports = async function (context, req) {
  const date = "2026-06-06T13:16:25.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


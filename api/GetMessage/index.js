module.exports = async function (context, req) {
  const date = "2026-05-25T07:07:13.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


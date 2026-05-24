module.exports = async function (context, req) {
  const date = "2026-05-24T19:06:19.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


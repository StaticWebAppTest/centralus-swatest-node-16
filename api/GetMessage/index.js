module.exports = async function (context, req) {
  const date = "2026-08-21T18:25:40.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


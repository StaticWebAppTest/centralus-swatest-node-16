module.exports = async function (context, req) {
  const date = "2026-05-23T23:51:23.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


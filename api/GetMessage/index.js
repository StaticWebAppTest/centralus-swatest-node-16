module.exports = async function (context, req) {
  const date = "2026-07-22T19:01:44.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


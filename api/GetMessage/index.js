module.exports = async function (context, req) {
  const date = "2026-08-23T02:20:09.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


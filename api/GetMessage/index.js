module.exports = async function (context, req) {
  const date = "2026-09-06T00:27:40.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


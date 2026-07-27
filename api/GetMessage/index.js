module.exports = async function (context, req) {
  const date = "2026-07-27T06:20:40.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2026-02-03T06:40:47.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


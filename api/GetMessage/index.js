module.exports = async function (context, req) {
  const date = "2026-03-11T14:00:47.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


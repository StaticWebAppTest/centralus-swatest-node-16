module.exports = async function (context, req) {
  const date = "2026-08-03T16:15:32.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


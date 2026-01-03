module.exports = async function (context, req) {
  const date = "2026-01-03T09:14:36.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


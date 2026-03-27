module.exports = async function (context, req) {
  const date = "2026-03-27T16:45:14.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


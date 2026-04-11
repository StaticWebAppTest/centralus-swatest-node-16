module.exports = async function (context, req) {
  const date = "2026-04-11T13:50:35.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


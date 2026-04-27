module.exports = async function (context, req) {
  const date = "2026-04-27T02:07:25.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


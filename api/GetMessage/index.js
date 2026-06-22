module.exports = async function (context, req) {
  const date = "2026-06-22T09:40:55.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


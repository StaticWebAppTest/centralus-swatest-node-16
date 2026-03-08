module.exports = async function (context, req) {
  const date = "2026-03-08T10:18:27.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


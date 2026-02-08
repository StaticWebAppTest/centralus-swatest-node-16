module.exports = async function (context, req) {
  const date = "2026-02-08T13:39:46.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


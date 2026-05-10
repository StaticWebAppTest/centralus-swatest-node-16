module.exports = async function (context, req) {
  const date = "2026-05-10T19:54:26.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


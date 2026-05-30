module.exports = async function (context, req) {
  const date = "2026-05-30T06:17:50.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2026-08-18T15:23:18.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


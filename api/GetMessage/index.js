module.exports = async function (context, req) {
  const date = "2026-08-11T17:51:39.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


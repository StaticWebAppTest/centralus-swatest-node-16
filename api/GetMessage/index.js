module.exports = async function (context, req) {
  const date = "2026-08-06T05:10:57.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


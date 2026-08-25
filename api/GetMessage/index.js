module.exports = async function (context, req) {
  const date = "2026-08-25T05:24:30.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


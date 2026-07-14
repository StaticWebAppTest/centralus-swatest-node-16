module.exports = async function (context, req) {
  const date = "2026-07-14T11:20:01.317Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


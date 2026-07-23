module.exports = async function (context, req) {
  const date = "2026-07-23T11:02:51.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


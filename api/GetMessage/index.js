module.exports = async function (context, req) {
  const date = "2026-05-14T15:13:21.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


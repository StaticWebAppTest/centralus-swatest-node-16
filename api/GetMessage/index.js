module.exports = async function (context, req) {
  const date = "2026-05-06T02:09:50.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


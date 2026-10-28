module.exports = async function (context, req) {
  const date = "2026-10-28T06:29:23.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


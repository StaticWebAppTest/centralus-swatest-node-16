module.exports = async function (context, req) {
  const date = "2026-03-06T08:29:45.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


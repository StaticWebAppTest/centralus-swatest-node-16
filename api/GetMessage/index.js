module.exports = async function (context, req) {
  const date = "2026-04-04T17:23:42.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


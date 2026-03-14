module.exports = async function (context, req) {
  const date = "2026-03-14T10:20:55.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


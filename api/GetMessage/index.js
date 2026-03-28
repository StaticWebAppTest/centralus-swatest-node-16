module.exports = async function (context, req) {
  const date = "2026-03-28T08:31:23.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


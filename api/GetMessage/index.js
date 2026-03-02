module.exports = async function (context, req) {
  const date = "2026-03-02T14:38:23.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


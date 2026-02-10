module.exports = async function (context, req) {
  const date = "2026-02-10T22:32:30.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2026-05-23T22:44:28.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


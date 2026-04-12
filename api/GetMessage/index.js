module.exports = async function (context, req) {
  const date = "2026-04-12T16:29:50.732Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


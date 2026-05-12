module.exports = async function (context, req) {
  const date = "2026-05-12T16:13:44.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


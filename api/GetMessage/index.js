module.exports = async function (context, req) {
  const date = "2026-08-12T21:37:30.772Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


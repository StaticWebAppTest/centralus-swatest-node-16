module.exports = async function (context, req) {
  const date = "2026-07-21T23:55:25.572Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


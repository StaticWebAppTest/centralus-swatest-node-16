module.exports = async function (context, req) {
  const date = "2026-10-25T13:03:58.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


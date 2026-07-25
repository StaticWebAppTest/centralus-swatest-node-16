module.exports = async function (context, req) {
  const date = "2026-07-25T05:36:25.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


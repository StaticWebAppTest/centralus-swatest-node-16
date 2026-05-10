module.exports = async function (context, req) {
  const date = "2026-05-10T16:44:08.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


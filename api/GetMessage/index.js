module.exports = async function (context, req) {
  const date = "2026-03-10T16:50:27.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


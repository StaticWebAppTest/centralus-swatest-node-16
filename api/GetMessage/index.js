module.exports = async function (context, req) {
  const date = "2026-01-12T16:20:05.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


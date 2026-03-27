module.exports = async function (context, req) {
  const date = "2026-03-27T09:47:43.264Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2026-11-25T11:57:42.628Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


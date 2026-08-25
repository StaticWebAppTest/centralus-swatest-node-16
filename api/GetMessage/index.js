module.exports = async function (context, req) {
  const date = "2026-08-25T18:28:44.245Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


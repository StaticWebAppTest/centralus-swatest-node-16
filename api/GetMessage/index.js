module.exports = async function (context, req) {
  const date = "2026-05-11T13:40:22.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


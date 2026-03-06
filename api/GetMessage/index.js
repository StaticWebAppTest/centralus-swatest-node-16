module.exports = async function (context, req) {
  const date = "2026-03-06T09:30:53.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


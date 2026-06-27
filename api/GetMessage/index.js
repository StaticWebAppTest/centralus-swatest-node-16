module.exports = async function (context, req) {
  const date = "2026-06-27T13:18:04.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


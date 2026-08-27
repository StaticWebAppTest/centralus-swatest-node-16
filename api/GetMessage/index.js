module.exports = async function (context, req) {
  const date = "2026-08-27T13:27:45.996Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


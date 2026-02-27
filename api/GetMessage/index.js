module.exports = async function (context, req) {
  const date = "2026-02-27T17:28:45.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


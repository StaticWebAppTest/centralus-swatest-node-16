module.exports = async function (context, req) {
  const date = "2026-02-25T09:45:17.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2026-02-21T09:23:04.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


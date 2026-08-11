module.exports = async function (context, req) {
  const date = "2026-08-11T09:53:09.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


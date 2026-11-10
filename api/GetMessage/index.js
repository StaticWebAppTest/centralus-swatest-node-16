module.exports = async function (context, req) {
  const date = "2026-11-10T13:09:45.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


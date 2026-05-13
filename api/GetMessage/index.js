module.exports = async function (context, req) {
  const date = "2026-05-13T11:57:30.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


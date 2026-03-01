module.exports = async function (context, req) {
  const date = "2026-03-01T13:34:30.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


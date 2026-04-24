module.exports = async function (context, req) {
  const date = "2026-04-24T17:43:30.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2026-05-23T15:57:30.398Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


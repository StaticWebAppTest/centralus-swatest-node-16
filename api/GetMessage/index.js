module.exports = async function (context, req) {
  const date = "2026-03-22T16:21:23.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


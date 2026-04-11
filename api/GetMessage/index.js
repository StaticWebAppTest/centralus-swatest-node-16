module.exports = async function (context, req) {
  const date = "2026-04-11T16:28:25.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


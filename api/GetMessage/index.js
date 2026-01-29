module.exports = async function (context, req) {
  const date = "2026-01-29T19:25:31.528Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


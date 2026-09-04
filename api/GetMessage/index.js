module.exports = async function (context, req) {
  const date = "2026-09-04T14:40:17.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


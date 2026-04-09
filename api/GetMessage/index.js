module.exports = async function (context, req) {
  const date = "2026-04-09T04:28:10.996Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


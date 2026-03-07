module.exports = async function (context, req) {
  const date = "2026-03-07T09:22:21.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


module.exports = async function (context, req) {
  const date = "2026-04-23T05:23:03.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


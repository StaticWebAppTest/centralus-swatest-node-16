module.exports = async function (context, req) {
  const date = "2026-08-23T04:29:08.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


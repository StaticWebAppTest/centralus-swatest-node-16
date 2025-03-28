module.exports = async function (context, req) {
  const date = "2025-03-28T07:12:54.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


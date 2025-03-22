module.exports = async function (context, req) {
  const date = "2025-03-22T08:15:01.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


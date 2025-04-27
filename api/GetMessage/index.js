module.exports = async function (context, req) {
  const date = "2025-04-27T05:12:58.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


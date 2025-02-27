module.exports = async function (context, req) {
  const date = "2025-02-27T02:19:32.775Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


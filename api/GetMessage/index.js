module.exports = async function (context, req) {
  const date = "2025-07-27T19:11:21.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


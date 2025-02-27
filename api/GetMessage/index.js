module.exports = async function (context, req) {
  const date = "2025-02-27T19:09:51.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


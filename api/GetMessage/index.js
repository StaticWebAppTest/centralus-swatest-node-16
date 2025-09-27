module.exports = async function (context, req) {
  const date = "2025-09-27T19:08:52.607Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


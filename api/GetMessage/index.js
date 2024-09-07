module.exports = async function (context, req) {
  const date = "2024-09-07T19:08:48.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


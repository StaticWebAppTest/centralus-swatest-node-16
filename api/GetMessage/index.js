module.exports = async function (context, req) {
  const date = "2025-02-23T19:08:32.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


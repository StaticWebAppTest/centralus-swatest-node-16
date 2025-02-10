module.exports = async function (context, req) {
  const date = "2025-02-10T23:12:05.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


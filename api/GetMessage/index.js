module.exports = async function (context, req) {
  const date = "2025-04-08T23:12:07.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


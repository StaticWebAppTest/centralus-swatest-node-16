module.exports = async function (context, req) {
  const date = "2023-01-10T02:17:47.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


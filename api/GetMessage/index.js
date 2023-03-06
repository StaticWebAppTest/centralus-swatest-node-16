module.exports = async function (context, req) {
  const date = "2023-03-06T02:21:56.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


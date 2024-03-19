module.exports = async function (context, req) {
  const date = "2024-03-19T19:08:02.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


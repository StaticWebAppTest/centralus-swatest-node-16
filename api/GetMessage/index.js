module.exports = async function (context, req) {
  const date = "2024-04-23T02:20:55.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


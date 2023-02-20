module.exports = async function (context, req) {
  const date = "2023-02-20T20:10:25.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


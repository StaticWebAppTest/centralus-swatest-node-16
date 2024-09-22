module.exports = async function (context, req) {
  const date = "2024-09-22T18:13:47.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};


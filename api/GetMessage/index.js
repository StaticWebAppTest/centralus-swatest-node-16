module.exports = async function (context, req) {
  const date = "2023-06-27T10:10:49.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

